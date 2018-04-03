import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { ErrorCode } from './../errorcodes/errorcode';
import { Router } from '@angular/router';

import { DialogMessageFormat } from '../models/dialogmessageformat';

import { DialogService } from './../../services/dialog.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { ServerstreamService } from '../services/serverstream/serverstream.service';


@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  constructor(private dialog: DialogService, private router: Router, private serverStream: ServerstreamService) {
  }

  ErrorCode = new ErrorCode();

  intercept(request: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    return next
      .handle(request)
      .do((ev: HttpEvent<any>) => {
        // VALID RESPONSE
        if (ev instanceof HttpResponse) {
          // FAULTS IN A VALID RESPONSE
          // console.dir(ev.body );
          //  console.log('ev.body in http');
          if (ev.status === 200 && ev.body.Faults.length > 0) {
            const message: DialogMessageFormat = {
              title: ev.body.Faults[0].ShortName,
              message: ev.body.Faults[0].ErrorMessage,
              okButtonText: 'Ok'
            };
            //  console.dir(message);
            this.dialog.showDialog(message);
            // alert(message);
          }
        }
      })
      .catch(response => {
        // ERROR RESPONSE
        if (response instanceof HttpErrorResponse) {
          console.log('HTTP interceptor' + response.status);


          if (this.ErrorCode.logout.indexOf(response.status) !== -1) {
            const message: DialogMessageFormat = {
              title: response.status.toString() + response.statusText,
              message: response.message
            };
          //  this.dialog.showDialog(message);
           // this.router.navigate(['/login']);
            console.log('should logout');
            this.serverStream.reAuthenticate();
          }
          if (this.ErrorCode.warning.indexOf(response.status) !== -1) {
            console.log('should warning');
          }
        }
        return ErrorObservable.create(response);
      });
  }


}

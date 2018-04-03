import { HTTP_INTERCEPTORS } from '@angular/common/http';
// date.interceptor.ts
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
import * as moment from 'moment';

@Injectable()
export class DateInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const iterateOverObjectProperties = (obj, transformFunction) => {
            for (const i in obj) {
                if (obj.hasOwnProperty(i)) {
                    transformFunction(i, obj);
                    if ((obj[i] instanceof Object)) {
                        iterateOverObjectProperties(obj[i], transformFunction);
                    }
                }
            }
           // return null;
        };
        const transformStringToTime = function (key, object) {
            const regExpression = /\/Date\((-?\d+\+?\d*)\)\//.exec(object[key]);
            if (regExpression != null && regExpression[1]) {
                object[key] = moment(parseInt(regExpression[1], 10));
            }
        };
        const transformTimeToString = function (key, object) {
            if (object[key] instanceof Date) {
                object[key] = '/Date(' + object[key].getTime() + ')/';
            }
        };

       // const copy = Object.assign({}, request.body);
        const DateToString = function (body) {
            iterateOverObjectProperties(body, transformTimeToString);
            return body;
        };
       // const transform = JSON.stringify(transfomed(copy));

        const customReq = request.clone({ body: DateToString(request.body)});

        return next.handle(customReq)
        .do((ev: HttpEvent<any>) => {
            // VALID RESPONSE
              if (ev instanceof HttpResponse) {
                // FAULTS IN A VALID RESPONSE
               // console.dir(ev.body );
                iterateOverObjectProperties(ev.body, transformStringToTime);
               // console.log('ev.body in date');
            }
        });
    }
}

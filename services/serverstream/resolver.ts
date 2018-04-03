import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ServerstreamService } from './serverstream.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';


@Injectable()
export class Resolver implements Resolve<Observable<any>> {

    constructor(@Inject(ServerstreamService) private serverstreamService: ServerstreamService) {}

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
            console.log('resolving');

      return this.serverstreamService.getMessage$(); ////  .subscribe();//
    }
}

import { AppError } from './../errorhandler/app-error';
import { BadInput } from './../errorhandler/bad-input';
import { NotFoundError } from './../errorhandler/not-found-error';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../../services/user.service';
import { map , catchError } from 'rxjs/operators';
// import { _throw } from 'rxjs/observable/throw';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HttpFactory {

    constructor(private http: HttpClient, private userservice: UserService) {}


    buildPost(type, parameters, domain?, silentFail?) {
        const subDir = domain === undefined ? '' : '.' + domain;
        const silent = silentFail !== undefined;
        const jsonObj = <any>{};
        jsonObj.CustomerTarget = 0;
        jsonObj.Faults = [];
        jsonObj.silentFail = silent;
        jsonObj.MessageId = 0;
        jsonObj.DeviceUUID = '1234'; // this.device.deviceInformation.uuid;
        jsonObj.AuthToken = this.userservice.token  || null;
        jsonObj.SubPacket = {};
        jsonObj.Platform = 'webb' ; // this.device.deviceInformation.deviceType;
        jsonObj.ClientType = 'OSt'; // his.device.deviceInformation.os;
        jsonObj.Origin = 'origin'; // this.device.deviceInformation.model;
        jsonObj.VersionCode = environment.versionCode;
        jsonObj.SubPacket.__type = type + ':¤tWorks.Alfa.AlfaCustomerJSONProtocol.DataPackets' + subDir;
        if (parameters !== undefined) {
            Object.assign(jsonObj.SubPacket, parameters ); // date into moment object
        }
        jsonObj.Username = this.userservice.Actor ? this.userservice.Actor.Username : null;

        return jsonObj;

    }

    sendRequest(body) {
        return this.http.post(environment.apiUrl, body)
        .pipe(
            map(res => {
            return res['SubPacket'];
            }),
           // catchError(this.handleErrors)
          );
    }

    private handleErrors(error: Response) {

        console.log('this.handleErrors called from API service');
        if (error.status === 404) {
            return ErrorObservable.create(new NotFoundError(error));
        }

        if (error.status === 400) {
            return ErrorObservable.create(new BadInput(error));
        }

        return ErrorObservable.create(new AppError(error));
    }


}

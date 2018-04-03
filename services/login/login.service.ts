import { Observable } from 'rxjs/Observable';
import { HttpFactory } from './../../factories/http.factory';
import { Inject, Injectable } from '@angular/core';
import { ActorLoginRequest, ActorLoginRequestReply } from './../../models/actorlogin';
import { PreLoginRequest } from './../../models/prelogin';

import { map } from 'rxjs/operators';
import { UserService } from '../../../services/user.service';

@Injectable()
export class LoginService {

    constructor(@Inject(HttpFactory) private _httpfactory: HttpFactory, @Inject(UserService) private userservice: UserService) {
    }

    login(user: ActorLoginRequest) {
        const body = this._httpfactory.buildPost(
            'ActorLoginRequest',
            {
                Username: user.Username,
                Password: user.Password,
                Domain: 'AlfaOnline'
            },
            'Misc');


        return this._httpfactory.sendRequest(body)
            .pipe(
                map((data: ActorLoginRequestReply) => {
                    if (data.Success) {
                        this.userservice.Credentials = user;
                        this.userservice.Actor = data.Actor;
                        this.userservice.token = data.AuthToken;
                        return true;
                    } else {
                        return false;
                    }
                })
            );
    }

    PreLoginRequest(Request: PreLoginRequest) {
        const body = this._httpfactory.buildPost(
            'PreLoginRequest',
            {
                Identifier: Request.Identifier,
                SystemId: Request.SystemId
            },
            'Customer');
        return this._httpfactory.sendRequest(body);
    }


}

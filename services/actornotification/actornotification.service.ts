import { Inject, Injectable } from '@angular/core';
import { HttpFactory } from '../../factories/http.factory';
import { ActorNotificationListItem, GetActorNotifications } from '../../models/actornotification';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ActornotificationService {
    constructor(@Inject(HttpFactory) private _httpfactory: HttpFactory) {}

    GetActorNotifications(request: GetActorNotifications = {}) {
        const body = this._httpfactory.buildPost(
            'GetActorNotifications',
            {
                Limit: request.Limit,
                Offset: request.Offset
            });
        return this._httpfactory.sendRequest(body)
            .pipe(
                map((data) => {
                    if (data) {
                        return data;
                    }
                })
            );
    }


}

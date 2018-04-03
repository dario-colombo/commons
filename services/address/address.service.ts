import { HttpFactory } from '../../factories/http.factory';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AddressService {

    constructor(@Inject(HttpFactory) private _httpfactory: HttpFactory) {
    }

    search(terms: Observable<string>) {
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.SearchAddress(term));
    }


    SearchAddress(string: string) {
        const body = this._httpfactory.buildPost(
            'SearchAddress',
            {
                SearchString: string
            });
        return this._httpfactory.sendRequest(body)
            .pipe(
                map((data) => {
                    if (data) {
                        return data.AddressList;
                    }
                })
            );

    }
}
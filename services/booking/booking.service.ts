import { GetBookingsRequest, BookingListItem, GetBookingSolution, NewBooking } from './../../models/booking';
import { HttpFactory } from '../../factories/http.factory';
import { Inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators/map';


@Injectable()
export class BookingService {
  new_booking = {};

  constructor(@Inject(HttpFactory) private _httpfactory: HttpFactory) {
  }


  GetBookings(request: GetBookingsRequest = {}) {
    const body = this._httpfactory.buildPost(
      'GetBookings',
      {
        StartDate: request.StartDate,
        EndDate: request.EndDate,
        Limit: request.Limit,
        Offset: request.Offset
      });

    return this._httpfactory.sendRequest(body)
      .pipe(              //  concatMap(data => Observable.of(data).delay(20000)),

        map((data) => {
          if (data) {
            return data.BookingList;
          }
        })
      );

  }

  GetSpecificBooking(BookingId: number) {
    const body = this._httpfactory.buildPost(
      'GetSpecificBooking',
      {
        BookingId: BookingId
      });

    return this._httpfactory.sendRequest(body)
      .pipe(
        map((data) => {
          if (data) {
            // console.log('GetSpecificBooking ');
            // console.log(data);
            return data;
          }
        })
      );

  }

  GetBookingSolution(request: GetBookingSolution) {
    const body = this._httpfactory.buildPost(
      'GetBookingSolution',
      request);

    return this._httpfactory.sendRequest(body)
      .pipe(
        map((data) => {
          if (data) {
            //  console.log('GetBookingSolution ');
            // console.log(data);
            return data;
          }
        })
      );
  }


}

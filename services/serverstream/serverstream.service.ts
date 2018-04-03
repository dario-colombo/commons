import { Observable } from 'rxjs/Observable';
import { BookingService } from '../booking/booking.service';
import { BookingListItem } from '../../models/booking';
import { ActornotificationService } from '../actornotification/actornotification.service';
import { map } from 'rxjs/operators/map';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/delayWhen';
import { UserService } from '../../../services/user.service';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/repeatWhen';
import 'rxjs/add/observable/timer';
import { timer } from 'rxjs/observable/timer';
import { LoginService } from '../login/login.service';
import { AppError } from '../../errorhandler/app-error';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class ServerstreamService {
  serverStream$: Subscription;
  silentLogin$: Subscription;
  ListStatic: number;
  // observableMessage;
  private observableMessageList: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly getMessageList: Observable<any> = this.observableMessageList.asObservable();

  private observableUnreadMessage: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly getUnreadMessage: Observable<any> = this.observableUnreadMessage.asObservable().distinctUntilChanged();

  private observableBookingList: BehaviorSubject<any> = new BehaviorSubject([]);
  public readonly getBookingList: Observable<any> = this.observableBookingList.asObservable();

  constructor(@Inject(BookingService) private bookingService: BookingService,
              @Inject(ActornotificationService) private messageService: ActornotificationService,
              @Inject(LoginService) private loginService: LoginService,
              @Inject(UserService) private userService: UserService) {
  }


  getMessage$() {
    return this.messageService.GetActorNotifications({Limit: 100})
      .pipe(
        tap(data => {
          this.observableMessageList.next(data);
          this.ListStatic = data.UnreadNotifications;
        })
      )
      ._catch(error => of(error));
  }

  getBookings$(): Observable<any> {
    return this.bookingService.GetBookings({Limit: 100});
  }

  reAuthenticate() {
    this.destroyServerStream();
    this.silentLogin$ = this.loginService.login(this.userService.Credentials)
      .retryWhen(errors => errors
        .do(error => {
          console.log('loginService() retryWhen ' + error.status);
        })
        .delayWhen(val => Observable.timer(10000))
      ).subscribe(
        (result) => {
          if (result) { // true login succesfull
            console.log('logged in');
          } else {
            this.userService.logout();
          }
        }

        ,
        (error: AppError) =>
          console
            .log(error)

        ,
        () => {
          console
            .log(
              'completed'
            );
          this
            .activateServerStream();
        }
      )
    ;

// unsubscribe stream
// login
// ---if success subscribe streams
// ---if wrong pwd go to login page
// ---if no answer retry

  }

  activateServerStream() {
    this.serverStream$ = forkJoin([
      this.bookingService.GetBookings({Limit: 100}),
      this.messageService.GetActorNotifications({Limit: 100})
    ]).pipe(
      tap(data => this.observableBookingList.next(data[0])),
      tap(data => this.observableMessageList.next(data[1])),
      tap(data => this.observableUnreadMessage.next(data[1].UnreadNotifications))
      // repeatWhen(completed => completed.delay(environment.refreshRate)),
      // catchError(error => of(error))
    ).retryWhen(errors => errors
      // log error message
        .do(error => {
          console.dir(error);
        })
        // restart in 10 seconds
        .delayWhen(val => Observable.timer(10000)),
    )
      .repeatWhen(completed => completed.delay(environment.refreshRate))
      .subscribe(
        /*     ()=>console.log('success'),
             (error)=>console.dir(error),
             ()=>console.log('completed')*/
      );

  }

  destroyServerStream() {
    if (this.serverStream$) {
      this.serverStream$.unsubscribe();
    }
    if (this.silentLogin$) {
      this.silentLogin$.unsubscribe();
    }

  }

}

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
var booking_service_1 = require("../booking/booking.service");
var actornotification_service_1 = require("../actornotification/actornotification.service");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/observable/of");
var forkJoin_1 = require("rxjs/observable/forkJoin");
var core_1 = require("@angular/core");
require("rxjs/add/observable/of");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var environment_1 = require("../../../environments/environment");
require("rxjs/add/observable/of");
require("rxjs/add/operator/delay");
require("rxjs/add/operator/retryWhen");
require("rxjs/add/operator/takeUntil");
require("rxjs/add/operator/delayWhen");
var user_service_1 = require("../../../services/user.service");
require("rxjs/add/operator/retry");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/repeatWhen");
require("rxjs/add/observable/timer");
var login_service_1 = require("../login/login.service");
require("rxjs/add/operator/distinctUntilChanged");
var ServerstreamService = /** @class */ (function () {
    function ServerstreamService(bookingService, messageService, loginService, userService) {
        this.bookingService = bookingService;
        this.messageService = messageService;
        this.loginService = loginService;
        this.userService = userService;
        // observableMessage;
        this.observableMessageList = new BehaviorSubject_1.BehaviorSubject([]);
        this.getMessageList = this.observableMessageList.asObservable();
        this.observableUnreadMessage = new BehaviorSubject_1.BehaviorSubject([]);
        this.getUnreadMessage = this.observableUnreadMessage.asObservable().distinctUntilChanged();
        this.observableBookingList = new BehaviorSubject_1.BehaviorSubject([]);
        this.getBookingList = this.observableBookingList.asObservable();
    }
    ServerstreamService.prototype.getMessage$ = function () {
        var _this = this;
        return this.messageService.GetActorNotifications({ Limit: 100 })
            .pipe(operators_1.tap(function (data) {
            _this.observableMessageList.next(data);
            _this.ListStatic = data.UnreadNotifications;
        }))
            ._catch(function (error) { return of_1.of(error); });
    };
    ServerstreamService.prototype.getBookings$ = function () {
        return this.bookingService.GetBookings({ Limit: 100 });
    };
    ServerstreamService.prototype.reAuthenticate = function () {
        var _this = this;
        this.destroyServerStream();
        this.silentLogin$ = this.loginService.login(this.userService.Credentials)
            .retryWhen(function (errors) { return errors
            .do(function (error) {
            console.log('loginService() retryWhen ' + error.status);
        })
            .delayWhen(function (val) { return Observable_1.Observable.timer(10000); }); }).subscribe(function (result) {
            if (result) {
                console.log('logged in');
            }
            else {
                _this.userService.logout();
            }
        }, function (error) {
            return console
                .log(error);
        }, function () {
            console
                .log('completed');
            _this
                .activateServerStream();
        });
        // unsubscribe stream
        // login
        // ---if success subscribe streams
        // ---if wrong pwd go to login page
        // ---if no answer retry
    };
    ServerstreamService.prototype.activateServerStream = function () {
        var _this = this;
        this.serverStream$ = forkJoin_1.forkJoin([
            this.bookingService.GetBookings({ Limit: 100 }),
            this.messageService.GetActorNotifications({ Limit: 100 })
        ]).pipe(operators_1.tap(function (data) { return _this.observableBookingList.next(data[0]); }), operators_1.tap(function (data) { return _this.observableMessageList.next(data[1]); }), operators_1.tap(function (data) { return _this.observableUnreadMessage.next(data[1].UnreadNotifications); })
        // repeatWhen(completed => completed.delay(environment.refreshRate)),
        // catchError(error => of(error))
        ).retryWhen(function (errors) { return errors
            .do(function (error) {
            console.dir(error);
        })
            .delayWhen(function (val) { return Observable_1.Observable.timer(10000); }); })
            .repeatWhen(function (completed) { return completed.delay(environment_1.environment.refreshRate); })
            .subscribe();
    };
    ServerstreamService.prototype.destroyServerStream = function () {
        if (this.serverStream$) {
            this.serverStream$.unsubscribe();
        }
        if (this.silentLogin$) {
            this.silentLogin$.unsubscribe();
        }
    };
    ServerstreamService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(booking_service_1.BookingService)),
        __param(1, core_1.Inject(actornotification_service_1.ActornotificationService)),
        __param(2, core_1.Inject(login_service_1.LoginService)),
        __param(3, core_1.Inject(user_service_1.UserService)),
        __metadata("design:paramtypes", [booking_service_1.BookingService,
            actornotification_service_1.ActornotificationService,
            login_service_1.LoginService,
            user_service_1.UserService])
    ], ServerstreamService);
    return ServerstreamService;
}());
exports.ServerstreamService = ServerstreamService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyc3RyZWFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2ZXJzdHJlYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDhEQUE0RDtBQUU1RCw0RkFBMEY7QUFFMUYsNENBQWlEO0FBQ2pELHlDQUF3QztBQUN4QyxxREFBb0Q7QUFDcEQsc0NBQW1EO0FBQ25ELGtDQUFnQztBQUNoQyx3REFBdUQ7QUFDdkQsaUVBQWdFO0FBQ2hFLGtDQUFnQztBQUNoQyxtQ0FBaUM7QUFDakMsdUNBQXFDO0FBQ3JDLHVDQUFxQztBQUNyQyx1Q0FBcUM7QUFDckMsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxtQ0FBaUM7QUFDakMsd0NBQXNDO0FBQ3RDLHFDQUFtQztBQUVuQyx3REFBc0Q7QUFHdEQsa0RBQWdEO0FBR2hEO0lBY0UsNkJBQTRDLGNBQThCLEVBQ3BCLGNBQXdDLEVBQ3BELFlBQTBCLEVBQzNCLFdBQXdCO1FBSHJCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBMEI7UUFDcEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFiakUscUJBQXFCO1FBQ2IsMEJBQXFCLEdBQXlCLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxtQkFBYyxHQUFvQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEYsNEJBQXVCLEdBQXlCLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBb0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFL0csMEJBQXFCLEdBQXlCLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxtQkFBYyxHQUFvQixJQUFJLENBQUMscUJB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Qyw0QkFBWTtZQUNkLDBCQUFXO09BakJ0RCxtQkFBbUIsQ0FtSC9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5IRCxJQW1IQztBQW5IWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UgfSBmcm9tICcuLi9ib29raW5nL2Jvb2tpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEJvb2tpbmdMaXN0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9ib29raW5nJztcclxuaW1wb3J0IHsgQWN0b3Jub3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYWN0b3Jub3RpZmljYXRpb24vYWN0b3Jub3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzL21hcCc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgeyBmb3JrSm9pbiB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mb3JrSm9pbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnlXaGVuJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90YWtlVW50aWwnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5V2hlbic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9yZXRyeSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3JlcGVhdFdoZW4nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGltZXInO1xyXG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS90aW1lcic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9yaGFuZGxlci9hcHAtZXJyb3InO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VydmVyc3RyZWFtU2VydmljZSB7XHJcbiAgc2VydmVyU3RyZWFtJDogU3Vic2NyaXB0aW9uO1xyXG4gIHNpbGVudExvZ2luJDogU3Vic2NyaXB0aW9uO1xyXG4gIExpc3RTdGF0aWM6IG51bWJlcjtcclxuICAvLyBvYnNlcnZhYmxlTWVzc2FnZTtcclxuICBwcml2YXRlIG9ic2VydmFibGVNZXNzYWdlTGlzdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcclxuICBwdWJsaWMgcmVhZG9ubHkgZ2V0TWVzc2FnZUxpc3Q6IE9ic2VydmFibGU8YW55PiA9IHRoaXMub2JzZXJ2YWJsZU1lc3NhZ2VMaXN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICBwcml2YXRlIG9ic2VydmFibGVVbnJlYWRNZXNzYWdlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gIHB1YmxpYyByZWFkb25seSBnZXRVbnJlYWRNZXNzYWdlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLm9ic2VydmFibGVVbnJlYWRNZXNzYWdlLmFzT2JzZXJ2YWJsZSgpLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCk7XHJcblxyXG4gIHByaXZhdGUgb2JzZXJ2YWJsZUJvb2tpbmdMaXN0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gIHB1YmxpYyByZWFkb25seSBnZXRCb29raW5nTGlzdDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5vYnNlcnZhYmxlQm9va2luZ0xpc3QuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoQm9va2luZ1NlcnZpY2UpIHByaXZhdGUgYm9va2luZ1NlcnZpY2U6IEJvb2tpbmdTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIEBJbmplY3QoQWN0b3Jub3RpZmljYXRpb25TZXJ2aWNlKSBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBBY3Rvcm5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgQEluamVjdChMb2dpblNlcnZpY2UpIHByaXZhdGUgbG9naW5TZXJ2aWNlOiBMb2dpblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgQEluamVjdChVc2VyU2VydmljZSkgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICB9XHJcblxyXG5cclxuICBnZXRNZXNzYWdlJCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VTZXJ2aWNlLkdldEFjdG9yTm90aWZpY2F0aW9ucyh7TGltaXQ6IDEwMH0pXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcChkYXRhID0+IHtcclxuICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZU1lc3NhZ2VMaXN0Lm5leHQoZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLkxpc3RTdGF0aWMgPSBkYXRhLlVucmVhZE5vdGlmaWNhdGlvbnM7XHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gICAgICAuX2NhdGNoKGVycm9yID0+IG9mKGVycm9yKSk7XHJcbiAgfVxyXG5cclxuICBnZXRCb29raW5ncyQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLmJvb2tpbmdTZXJ2aWNlLkdldEJvb2tpbmdzKHtMaW1pdDogMTAwfSk7XHJcbiAgfVxyXG5cclxuICByZUF1dGhlbnRpY2F0ZSgpIHtcclxuICAgIHRoaXMuZGVzdHJveVNlcnZlclN0cmVhbSgpO1xyXG4gICAgdGhpcy5zaWxlbnRMb2dpbiQgPSB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLnVzZXJTZXJ2aWNlLkNyZWRlbnRpYWxzKVxyXG4gICAgICAucmV0cnlXaGVuKGVycm9ycyA9PiBlcnJvcnNcclxuICAgICAgICAuZG8oZXJyb3IgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luU2VydmljZSgpIHJldHJ5V2hlbiAnICsgZXJyb3Iuc3RhdHVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kZWxheVdoZW4odmFsID0+IE9ic2VydmFibGUudGltZXIoMTAwMDApKVxyXG4gICAgICApLnN1YnNjcmliZShcclxuICAgICAgICAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7IC8vIHRydWUgbG9naW4gc3VjY2VzZnVsbFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VkIGluJyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ291dCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLFxyXG4gICAgICAgIChlcnJvcjogQXBwRXJyb3IpID0+XHJcbiAgICAgICAgICBjb25zb2xlXHJcbiAgICAgICAgICAgIC5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgICxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlXHJcbiAgICAgICAgICAgIC5sb2coXHJcbiAgICAgICAgICAgICAgJ2NvbXBsZXRlZCdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgLmFjdGl2YXRlU2VydmVyU3RyZWFtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICApXHJcbiAgICA7XHJcblxyXG4vLyB1bnN1YnNjcmliZSBzdHJlYW1cclxuLy8gbG9naW5cclxuLy8gLS0taWYgc3VjY2VzcyBzdWJzY3JpYmUgc3RyZWFtc1xyXG4vLyAtLS1pZiB3cm9uZyBwd2QgZ28gdG8gbG9naW4gcGFnZVxyXG4vLyAtLS1pZiBubyBhbnN3ZXIgcmV0cnlcclxuXHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZVNlcnZlclN0cmVhbSgpIHtcclxuICAgIHRoaXMuc2VydmVyU3RyZWFtJCA9IGZvcmtKb2luKFtcclxuICAgICAgdGhpcy5ib29raW5nU2VydmljZS5HZXRCb29raW5ncyh7TGltaXQ6IDEwMH0pLFxyXG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLkdldEFjdG9yTm90aWZpY2F0aW9ucyh7TGltaXQ6IDEwMH0pXHJcbiAgICBdKS5waXBlKFxyXG4gICAgICB0YXAoZGF0YSA9PiB0aGlzLm9ic2VydmFibGVCb29raW5nTGlzdC5uZXh0KGRhdGFbMF0pKSxcclxuICAgICAgdGFwKGRhdGEgPT4gdGhpcy5vYnNlcnZhYmxlTWVzc2FnZUxpc3QubmV4dChkYXRhWzFdKSksXHJcbiAgICAgIHRhcChkYXRhID0+IHRoaXMub2JzZXJ2YWJsZVVucmVhZE1lc3NhZ2UubmV4dChkYXRhWzFdLlVucmVhZE5vdGlmaWNhdGlvbnMpKVxyXG4gICAgICAvLyByZXBlYXRXaGVuKGNvbXBsZXRlZCA9PiBjb21wbGV0ZWQuZGVsYXkoZW52aXJvbm1lbnQucmVmcmVzaFJhdGUpKSxcclxuICAgICAgLy8gY2F0Y2hFcnJvcihlcnJvciA9PiBvZihlcnJvcikpXHJcbiAgICApLnJldHJ5V2hlbihlcnJvcnMgPT4gZXJyb3JzXHJcbiAgICAgIC8vIGxvZyBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgLmRvKGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHJlc3RhcnQgaW4gMTAgc2Vjb25kc1xyXG4gICAgICAgIC5kZWxheVdoZW4odmFsID0+IE9ic2VydmFibGUudGltZXIoMTAwMDApKSxcclxuICAgIClcclxuICAgICAgLnJlcGVhdFdoZW4oY29tcGxldGVkID0+IGNvbXBsZXRlZC5kZWxheShlbnZpcm9ubWVudC5yZWZyZXNoUmF0ZSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLyogICAgICgpPT5jb25zb2xlLmxvZygnc3VjY2VzcycpLFxyXG4gICAgICAgICAgICAgKGVycm9yKT0+Y29uc29sZS5kaXIoZXJyb3IpLFxyXG4gICAgICAgICAgICAgKCk9PmNvbnNvbGUubG9nKCdjb21wbGV0ZWQnKSovXHJcbiAgICAgICk7XHJcblxyXG4gIH1cclxuXHJcbiAgZGVzdHJveVNlcnZlclN0cmVhbSgpIHtcclxuICAgIGlmICh0aGlzLnNlcnZlclN0cmVhbSQpIHtcclxuICAgICAgdGhpcy5zZXJ2ZXJTdHJlYW0kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaWxlbnRMb2dpbiQpIHtcclxuICAgICAgdGhpcy5zaWxlbnRMb2dpbiQudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
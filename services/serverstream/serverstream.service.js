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
            .delayWhen(function (val) { return Observable_1.Observable.timer(10000); }); }).subscribe(function (result) { return console.log('logged in'); }, function (error) { return console.log(error); }, function () {
            console.log('completed');
            _this.activateServerStream();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyc3RyZWFtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2ZXJzdHJlYW0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOENBQTZDO0FBQzdDLDhEQUE0RDtBQUU1RCw0RkFBMEY7QUFFMUYsNENBQWlEO0FBQ2pELHlDQUF3QztBQUN4QyxxREFBb0Q7QUFDcEQsc0NBQW1EO0FBQ25ELGtDQUFnQztBQUNoQyx3REFBdUQ7QUFDdkQsaUVBQWdFO0FBQ2hFLGtDQUFnQztBQUNoQyxtQ0FBaUM7QUFDakMsdUNBQXFDO0FBQ3JDLHVDQUFxQztBQUNyQyx1Q0FBcUM7QUFDckMsK0RBQTZEO0FBQzdELG1DQUFpQztBQUNqQyxtQ0FBaUM7QUFDakMsd0NBQXNDO0FBQ3RDLHFDQUFtQztBQUVuQyx3REFBc0Q7QUFHdEQsa0RBQWdEO0FBR2hEO0lBY0ksNkJBQTRDLGNBQThCLEVBQ3BCLGNBQXdDLEVBQ3BELFlBQTBCLEVBQzNCLFdBQXdCO1FBSHJCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBMEI7UUFDcEQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFiakUscUJBQXFCO1FBQ2IsMEJBQXFCLEdBQXlCLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxtQkFBYyxHQUFvQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEYsNEJBQXVCLEdBQXlCLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoRSxxQkFBZ0IsR0FBb0IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFL0csMEJBQXFCLEdBQXlCLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxtQkFBYyxHQUFvQixJQUFJLENBQUMscUJB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IH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgQm9va2luZ1NlcnZpY2UgfSBmcm9tICcuLi9ib29raW5nL2Jvb2tpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEJvb2tpbmdMaXN0SXRlbSB9IGZyb20gJy4uLy4uL21vZGVscy9ib29raW5nJztcclxuaW1wb3J0IHsgQWN0b3Jub3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vYWN0b3Jub3RpZmljYXRpb24vYWN0b3Jub3RpZmljYXRpb24uc2VydmljZSc7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzL21hcCc7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgeyBmb3JrSm9pbiB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9mb3JrSm9pbic7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvb2YnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL0JlaGF2aW9yU3ViamVjdCc7XHJcbmltcG9ydCB7IGVudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kZWxheSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvcmV0cnlXaGVuJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90YWtlVW50aWwnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5V2hlbic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9yZXRyeSc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3JlcGVhdFdoZW4nO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGltZXInO1xyXG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS90aW1lcic7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gJy4uL2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJy4uLy4uL2Vycm9yaGFuZGxlci9hcHAtZXJyb3InO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGlzdGluY3RVbnRpbENoYW5nZWQnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VydmVyc3RyZWFtU2VydmljZSB7XHJcbiAgICBzZXJ2ZXJTdHJlYW0kOiBTdWJzY3JpcHRpb247XHJcbiAgICBzaWxlbnRMb2dpbiQ6IFN1YnNjcmlwdGlvbjtcclxuICAgIExpc3RTdGF0aWM6IG51bWJlcjtcclxuICAgIC8vIG9ic2VydmFibGVNZXNzYWdlO1xyXG4gICAgcHJpdmF0ZSBvYnNlcnZhYmxlTWVzc2FnZUxpc3Q6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0TWVzc2FnZUxpc3Q6IE9ic2VydmFibGU8YW55PiA9IHRoaXMub2JzZXJ2YWJsZU1lc3NhZ2VMaXN0LmFzT2JzZXJ2YWJsZSgpO1xyXG5cclxuICAgIHByaXZhdGUgb2JzZXJ2YWJsZVVucmVhZE1lc3NhZ2U6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgZ2V0VW5yZWFkTWVzc2FnZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5vYnNlcnZhYmxlVW5yZWFkTWVzc2FnZS5hc09ic2VydmFibGUoKS5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpO1xyXG5cclxuICAgIHByaXZhdGUgb2JzZXJ2YWJsZUJvb2tpbmdMaXN0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGdldEJvb2tpbmdMaXN0OiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLm9ic2VydmFibGVCb29raW5nTGlzdC5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KEJvb2tpbmdTZXJ2aWNlKSBwcml2YXRlIGJvb2tpbmdTZXJ2aWNlOiBCb29raW5nU2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoQWN0b3Jub3RpZmljYXRpb25TZXJ2aWNlKSBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBBY3Rvcm5vdGlmaWNhdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KExvZ2luU2VydmljZSkgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcclxuICAgICAgICAgICAgICAgIEBJbmplY3QoVXNlclNlcnZpY2UpIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldE1lc3NhZ2UkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VTZXJ2aWNlLkdldEFjdG9yTm90aWZpY2F0aW9ucyh7TGltaXQ6IDEwMH0pXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgdGFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JzZXJ2YWJsZU1lc3NhZ2VMaXN0Lm5leHQoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5MaXN0U3RhdGljID0gZGF0YS5VbnJlYWROb3RpZmljYXRpb25zO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuX2NhdGNoKGVycm9yID0+IG9mKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm9va2luZ3MkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9va2luZ1NlcnZpY2UuR2V0Qm9va2luZ3Moe0xpbWl0OiAxMDB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZUF1dGhlbnRpY2F0ZSgpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3lTZXJ2ZXJTdHJlYW0oKTtcclxuICAgICAgICB0aGlzLnNpbGVudExvZ2luJCA9IHRoaXMubG9naW5TZXJ2aWNlLmxvZ2luKHRoaXMudXNlclNlcnZpY2UuQ3JlZGVudGlhbHMpXHJcbiAgICAgICAgICAgIC5yZXRyeVdoZW4oZXJyb3JzID0+IGVycm9yc1xyXG4gICAgICAgICAgICAgICAgLmRvKGVycm9yID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW5TZXJ2aWNlKCkgcmV0cnlXaGVuICcgKyBlcnJvci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5kZWxheVdoZW4odmFsID0+IE9ic2VydmFibGUudGltZXIoMTAwMDApKVxyXG4gICAgICAgICAgICApLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKSxcclxuICAgICAgICAgICAgICAgIChlcnJvcjogQXBwRXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29tcGxldGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZVNlcnZlclN0cmVhbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyB1bnN1YnNjcmliZSBzdHJlYW1cclxuICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgIC8vIC0tLWlmIHN1Y2Nlc3Mgc3Vic2NyaWJlIHN0cmVhbXNcclxuICAgICAgICAvLyAtLS1pZiB3cm9uZyBwd2QgZ28gdG8gbG9naW4gcGFnZVxyXG4gICAgICAgIC8vIC0tLWlmIG5vIGFuc3dlciByZXRyeVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZVNlcnZlclN0cmVhbSgpIHtcclxuICAgICAgICB0aGlzLnNlcnZlclN0cmVhbSQgPSBmb3JrSm9pbihbXHJcbiAgICAgICAgICAgIHRoaXMuYm9va2luZ1NlcnZpY2UuR2V0Qm9va2luZ3Moe0xpbWl0OiAxMDB9KSxcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5HZXRBY3Rvck5vdGlmaWNhdGlvbnMoe0xpbWl0OiAxMDB9KVxyXG4gICAgICAgIF0pLnBpcGUoXHJcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMub2JzZXJ2YWJsZUJvb2tpbmdMaXN0Lm5leHQoZGF0YVswXSkpLFxyXG4gICAgICAgICAgICB0YXAoZGF0YSA9PiB0aGlzLm9ic2VydmFibGVNZXNzYWdlTGlzdC5uZXh0KGRhdGFbMV0pKSxcclxuICAgICAgICAgICAgdGFwKGRhdGEgPT4gdGhpcy5vYnNlcnZhYmxlVW5yZWFkTWVzc2FnZS5uZXh0KGRhdGFbMV0uVW5yZWFkTm90aWZpY2F0aW9ucykpXHJcbiAgICAgICAgICAgIC8vIHJlcGVhdFdoZW4oY29tcGxldGVkID0+IGNvbXBsZXRlZC5kZWxheShlbnZpcm9ubWVudC5yZWZyZXNoUmF0ZSkpLFxyXG4gICAgICAgICAgICAvLyBjYXRjaEVycm9yKGVycm9yID0+IG9mKGVycm9yKSlcclxuICAgICAgICApLnJldHJ5V2hlbihlcnJvcnMgPT4gZXJyb3JzXHJcbiAgICAgICAgICAgIC8vIGxvZyBlcnJvciBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAuZG8oZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyByZXN0YXJ0IGluIDEwIHNlY29uZHNcclxuICAgICAgICAgICAgICAgIC5kZWxheVdoZW4odmFsID0+IE9ic2VydmFibGUudGltZXIoMTAwMDApKSxcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC5yZXBlYXRXaGVuKGNvbXBsZXRlZCA9PiBjb21wbGV0ZWQuZGVsYXkoZW52aXJvbm1lbnQucmVmcmVzaFJhdGUpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgLyogICAgICgpPT5jb25zb2xlLmxvZygnc3VjY2VzcycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAoZXJyb3IpPT5jb25zb2xlLmRpcihlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgICAgICgpPT5jb25zb2xlLmxvZygnY29tcGxldGVkJykqL1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95U2VydmVyU3RyZWFtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZlclN0cmVhbSQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJTdHJlYW0kLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNpbGVudExvZ2luJCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpbGVudExvZ2luJC51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
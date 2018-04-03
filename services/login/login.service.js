Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("./../../factories/http.factory");
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var user_service_1 = require("../../../services/user.service");
var LoginService = /** @class */ (function () {
    function LoginService(_httpfactory, userservice) {
        this._httpfactory = _httpfactory;
        this.userservice = userservice;
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        var body = this._httpfactory.buildPost('ActorLoginRequest', {
            Username: user.Username,
            Password: user.Password,
            Domain: 'AlfaOnline'
        }, 'Misc');
        return this._httpfactory.sendRequest(body)
            .pipe(operators_1.map(function (data) {
            if (data.Success) {
                _this.userservice.Credentials = user;
                _this.userservice.Actor = data.Actor;
                _this.userservice.token = data.AuthToken;
                return true;
            }
            else {
                return false;
            }
        }));
    };
    LoginService.prototype.PreLoginRequest = function (Request) {
        var body = this._httpfactory.buildPost('PreLoginRequest', {
            Identifier: Request.Identifier,
            SystemId: Request.SystemId
        }, 'Customer');
        return this._httpfactory.sendRequest(body);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_factory_1.HttpFactory)), __param(1, core_1.Inject(user_service_1.UserService)),
        __metadata("design:paramtypes", [http_factory_1.HttpFactory, user_service_1.UserService])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLCtEQUE2RDtBQUM3RCxzQ0FBbUQ7QUFJbkQsNENBQXFDO0FBQ3JDLCtEQUE2RDtBQUc3RDtJQUVJLHNCQUF5QyxZQUF5QixFQUErQixXQUF3QjtRQUFoRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUErQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUN6SCxDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLElBQXVCO1FBQTdCLGlCQXdCQztRQXZCRyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDcEMsbUJBQW1CLEVBQ25CO1lBQ0ksUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsWUFBWTtTQUN2QixFQUNELE1BQU0sQ0FBQyxDQUFDO1FBR1osTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUNyQyxJQUFJLENBQ0QsZUFBRyxDQUFDLFVBQUMsSUFBNEI7WUFDN0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsT0FBd0I7UUFDcEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3BDLGlCQUFpQixFQUNqQjtZQUNJLFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVTtZQUM5QixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVE7U0FDN0IsRUFDRCxVQUFVLENBQUMsQ0FBQztRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXhDUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7UUFHSSxXQUFBLGFBQU0sQ0FBQywwQkFBVyxDQUFDLENBQUEsRUFBcUMsV0FBQSxhQUFNLENBQUMsMEJBQVcsQ0FBQyxDQUFBO3lDQUFqQywwQkFBVyxFQUE0QywwQkFBVztPQUZoSCxZQUFZLENBMkN4QjtJQUFELG1CQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0IHsgSHR0cEZhY3RvcnkgfSBmcm9tICcuLy4uLy4uL2ZhY3Rvcmllcy9odHRwLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0b3JMb2dpblJlcXVlc3QsIEFjdG9yTG9naW5SZXF1ZXN0UmVwbHkgfSBmcm9tICcuLy4uLy4uL21vZGVscy9hY3RvcmxvZ2luJztcclxuaW1wb3J0IHsgUHJlTG9naW5SZXF1ZXN0IH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvcHJlbG9naW4nO1xyXG5cclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cEZhY3RvcnkpIHByaXZhdGUgX2h0dHBmYWN0b3J5OiBIdHRwRmFjdG9yeSwgQEluamVjdChVc2VyU2VydmljZSkgcHJpdmF0ZSB1c2Vyc2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbih1c2VyOiBBY3RvckxvZ2luUmVxdWVzdCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9odHRwZmFjdG9yeS5idWlsZFBvc3QoXHJcbiAgICAgICAgICAgICdBY3RvckxvZ2luUmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiB1c2VyLlVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHVzZXIuUGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBEb21haW46ICdBbGZhT25saW5lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnTWlzYycpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBmYWN0b3J5LnNlbmRSZXF1ZXN0KGJvZHkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChkYXRhOiBBY3RvckxvZ2luUmVxdWVzdFJlcGx5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzZXJ2aWNlLkNyZWRlbnRpYWxzID0gdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc2VydmljZS5BY3RvciA9IGRhdGEuQWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnNlcnZpY2UudG9rZW4gPSBkYXRhLkF1dGhUb2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgUHJlTG9naW5SZXF1ZXN0KFJlcXVlc3Q6IFByZUxvZ2luUmVxdWVzdCkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9odHRwZmFjdG9yeS5idWlsZFBvc3QoXHJcbiAgICAgICAgICAgICdQcmVMb2dpblJlcXVlc3QnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBJZGVudGlmaWVyOiBSZXF1ZXN0LklkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICBTeXN0ZW1JZDogUmVxdWVzdC5TeXN0ZW1JZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnQ3VzdG9tZXInKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cGZhY3Rvcnkuc2VuZFJlcXVlc3QoYm9keSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
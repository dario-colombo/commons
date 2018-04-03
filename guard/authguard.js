Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
core_1.Injectable();
var AuthGuard = /** @class */ (function () {
    function AuthGuard(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.userservice.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuard = __decorate([
        __param(0, core_1.Inject(user_service_1.UserService)), __param(1, core_1.Inject(router_1.Router)),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aGd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aGd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXNEO0FBQ3RELDREQUEwRDtBQUcxRCxpQkFBVSxFQUFFLENBQUM7QUFDYjtJQUVJLG1CQUF5QyxXQUF3QixFQUEyQixNQUFjO1FBQWpFLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQTJCLFdBQU0sR0FBTixNQUFNLENBQVE7SUFFMUcsQ0FBQztJQUVELCtCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVqQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUVMLENBQUM7SUFmUSxTQUFTO1FBRUwsV0FBQSxhQUFNLENBQUMsMEJBQVcsQ0FBQyxDQUFBLEVBQXFDLFdBQUEsYUFBTSxDQUFDLGVBQU0sQ0FBQyxDQUFBO3lDQUE3QiwwQkFBVyxFQUFtQyxlQUFNO09BRmpHLFNBQVMsQ0FpQnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcblxyXG5JbmplY3RhYmxlKCk7XHJcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChVc2VyU2VydmljZSkgcHJpdmF0ZSB1c2Vyc2VydmljZTogVXNlclNlcnZpY2UgLCBASW5qZWN0KFJvdXRlcikgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW5BY3RpdmF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMudXNlcnNlcnZpY2UuaXNMb2dnZWRJbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
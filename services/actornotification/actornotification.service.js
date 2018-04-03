Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_factory_1 = require("../../factories/http.factory");
var map_1 = require("rxjs/operators/map");
var ActornotificationService = /** @class */ (function () {
    function ActornotificationService(_httpfactory) {
        this._httpfactory = _httpfactory;
    }
    ActornotificationService.prototype.GetActorNotifications = function (request) {
        if (request === void 0) { request = {}; }
        var body = this._httpfactory.buildPost('GetActorNotifications', {
            Limit: request.Limit,
            Offset: request.Offset
        });
        return this._httpfactory.sendRequest(body)
            .pipe(map_1.map(function (data) {
            if (data) {
                return data;
            }
        }));
    };
    ActornotificationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_factory_1.HttpFactory)),
        __metadata("design:paramtypes", [http_factory_1.HttpFactory])
    ], ActornotificationService);
    return ActornotificationService;
}());
exports.ActornotificationService = ActornotificationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0b3Jub3RpZmljYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdG9ybm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFtRDtBQUNuRCw2REFBMkQ7QUFFM0QsMENBQXlDO0FBR3pDO0lBQ0ksa0NBQXlDLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUV0RSx3REFBcUIsR0FBckIsVUFBc0IsT0FBbUM7UUFBbkMsd0JBQUEsRUFBQSxZQUFtQztRQUNyRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDcEMsdUJBQXVCLEVBQ3ZCO1lBQ0ksS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN6QixDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3JDLElBQUksQ0FDRCxTQUFHLENBQUMsVUFBQyxJQUFJO1lBQ0wsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBQ1YsQ0FBQztJQWxCUSx3QkFBd0I7UUFEcEMsaUJBQVUsRUFBRTtRQUVJLFdBQUEsYUFBTSxDQUFDLDBCQUFXLENBQUMsQ0FBQTt5Q0FBdUIsMEJBQVc7T0FEekQsd0JBQXdCLENBcUJwQztJQUFELCtCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZmFjdG9yaWVzL2h0dHAuZmFjdG9yeSc7XHJcbmltcG9ydCB7IEFjdG9yTm90aWZpY2F0aW9uTGlzdEl0ZW0sIEdldEFjdG9yTm90aWZpY2F0aW9ucyB9IGZyb20gJy4uLy4uL21vZGVscy9hY3Rvcm5vdGlmaWNhdGlvbic7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzL21hcCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3Rvcm5vdGlmaWNhdGlvblNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChIdHRwRmFjdG9yeSkgcHJpdmF0ZSBfaHR0cGZhY3Rvcnk6IEh0dHBGYWN0b3J5KSB7fVxyXG5cclxuICAgIEdldEFjdG9yTm90aWZpY2F0aW9ucyhyZXF1ZXN0OiBHZXRBY3Rvck5vdGlmaWNhdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLl9odHRwZmFjdG9yeS5idWlsZFBvc3QoXHJcbiAgICAgICAgICAgICdHZXRBY3Rvck5vdGlmaWNhdGlvbnMnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBMaW1pdDogcmVxdWVzdC5MaW1pdCxcclxuICAgICAgICAgICAgICAgIE9mZnNldDogcmVxdWVzdC5PZmZzZXRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHBmYWN0b3J5LnNlbmRSZXF1ZXN0KGJvZHkpXHJcbiAgICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
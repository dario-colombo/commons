Object.defineProperty(exports, "__esModule", { value: true });
var app_error_1 = require("./../errorhandler/app-error");
var bad_input_1 = require("./../errorhandler/bad-input");
var not_found_error_1 = require("./../errorhandler/not-found-error");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("./../../environments/environment");
var user_service_1 = require("./../../services/user.service");
var operators_1 = require("rxjs/operators");
// import { _throw } from 'rxjs/observable/throw';
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var HttpFactory = /** @class */ (function () {
    function HttpFactory(http, userservice) {
        this.http = http;
        this.userservice = userservice;
    }
    HttpFactory.prototype.buildPost = function (type, parameters, domain, silentFail) {
        var subDir = domain === undefined ? '' : '.' + domain;
        var silent = silentFail !== undefined;
        var jsonObj = {};
        jsonObj.CustomerTarget = 0;
        jsonObj.Faults = [];
        jsonObj.silentFail = silent;
        jsonObj.MessageId = 0;
        jsonObj.DeviceUUID = '1234'; // this.device.deviceInformation.uuid;
        jsonObj.AuthToken = this.userservice.token || null;
        jsonObj.SubPacket = {};
        jsonObj.Platform = 'webb'; // this.device.deviceInformation.deviceType;
        jsonObj.ClientType = 'OSt'; // his.device.deviceInformation.os;
        jsonObj.Origin = 'origin'; // this.device.deviceInformation.model;
        jsonObj.VersionCode = environment_1.environment.versionCode;
        jsonObj.SubPacket.__type = type + ':¤tWorks.Alfa.AlfaCustomerJSONProtocol.DataPackets' + subDir;
        if (parameters !== undefined) {
            Object.assign(jsonObj.SubPacket, parameters); // date into moment object
        }
        jsonObj.Username = this.userservice.Actor ? this.userservice.Actor.Username : null;
        return jsonObj;
    };
    HttpFactory.prototype.sendRequest = function (body) {
        return this.http.post(environment_1.environment.apiUrl, body)
            .pipe(operators_1.map(function (res) {
            return res['SubPacket'];
        }));
    };
    HttpFactory.prototype.handleErrors = function (error) {
        console.log('this.handleErrors called from API service');
        if (error.status === 404) {
            return ErrorObservable_1.ErrorObservable.create(new not_found_error_1.NotFoundError(error));
        }
        if (error.status === 400) {
            return ErrorObservable_1.ErrorObservable.create(new bad_input_1.BadInput(error));
        }
        return ErrorObservable_1.ErrorObservable.create(new app_error_1.AppError(error));
    };
    HttpFactory = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, user_service_1.UserService])
    ], HttpFactory);
    return HttpFactory;
}());
exports.HttpFactory = HttpFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5REFBdUQ7QUFDdkQseURBQXVEO0FBQ3ZELHFFQUFrRTtBQUNsRSw2Q0FBa0Q7QUFDbEQsc0NBQTJDO0FBQzNDLGdFQUErRDtBQUUvRCw4REFBNEQ7QUFDNUQsNENBQWtEO0FBQ2xELGtEQUFrRDtBQUNsRCxtRUFBa0U7QUFHbEU7SUFFSSxxQkFBb0IsSUFBZ0IsRUFBVSxXQUF3QjtRQUFsRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDO0lBRzFFLCtCQUFTLEdBQVQsVUFBVSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU8sRUFBRSxVQUFXO1FBQzVDLElBQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUN4RCxJQUFNLE1BQU0sR0FBRyxVQUFVLEtBQUssU0FBUyxDQUFDO1FBQ3hDLElBQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN4QixPQUFPLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUM1QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDLHNDQUFzQztRQUNuRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFLLElBQUksQ0FBQztRQUNwRCxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBRSxDQUFDLDRDQUE0QztRQUN4RSxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLG1DQUFtQztRQUMvRCxPQUFPLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLHVDQUF1QztRQUNsRSxPQUFPLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsV0FBVyxDQUFDO1FBQzlDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxvREFBb0QsR0FBRyxNQUFNLENBQUM7UUFDaEcsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBRSxDQUFDLENBQUMsMEJBQTBCO1FBQzdFLENBQUM7UUFDRCxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVuRixNQUFNLENBQUMsT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFFRCxpQ0FBVyxHQUFYLFVBQVksSUFBSTtRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUM7YUFDOUMsSUFBSSxDQUNELGVBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUVILENBQUM7SUFDUixDQUFDO0lBRU8sa0NBQVksR0FBcEIsVUFBcUIsS0FBZTtRQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLG9CQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRUQsTUFBTSxDQUFDLGlDQUFlLENBQUMsTUFBTSxDQUFDLElBQUksb0JBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFwRFEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUdpQixpQkFBVSxFQUF1QiwwQkFBVztPQUY3RCxXQUFXLENBdUR2QjtJQUFELGtCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJy4vLi4vZXJyb3JoYW5kbGVyL2FwcC1lcnJvcic7XHJcbmltcG9ydCB7IEJhZElucHV0IH0gZnJvbSAnLi8uLi9lcnJvcmhhbmRsZXIvYmFkLWlucHV0JztcclxuaW1wb3J0IHsgTm90Rm91bmRFcnJvciB9IGZyb20gJy4vLi4vZXJyb3JoYW5kbGVyL25vdC1mb3VuZC1lcnJvcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tICcuLy4uLy4uL2Vudmlyb25tZW50cy9lbnZpcm9ubWVudCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgbWFwICwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgX3Rocm93IH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL3Rocm93JztcclxuaW1wb3J0IHsgRXJyb3JPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIdHRwRmFjdG9yeSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIHVzZXJzZXJ2aWNlOiBVc2VyU2VydmljZSkge31cclxuXHJcblxyXG4gICAgYnVpbGRQb3N0KHR5cGUsIHBhcmFtZXRlcnMsIGRvbWFpbj8sIHNpbGVudEZhaWw/KSB7XHJcbiAgICAgICAgY29uc3Qgc3ViRGlyID0gZG9tYWluID09PSB1bmRlZmluZWQgPyAnJyA6ICcuJyArIGRvbWFpbjtcclxuICAgICAgICBjb25zdCBzaWxlbnQgPSBzaWxlbnRGYWlsICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY29uc3QganNvbk9iaiA9IDxhbnk+e307XHJcbiAgICAgICAganNvbk9iai5DdXN0b21lclRhcmdldCA9IDA7XHJcbiAgICAgICAganNvbk9iai5GYXVsdHMgPSBbXTtcclxuICAgICAgICBqc29uT2JqLnNpbGVudEZhaWwgPSBzaWxlbnQ7XHJcbiAgICAgICAganNvbk9iai5NZXNzYWdlSWQgPSAwO1xyXG4gICAgICAgIGpzb25PYmouRGV2aWNlVVVJRCA9ICcxMjM0JzsgLy8gdGhpcy5kZXZpY2UuZGV2aWNlSW5mb3JtYXRpb24udXVpZDtcclxuICAgICAgICBqc29uT2JqLkF1dGhUb2tlbiA9IHRoaXMudXNlcnNlcnZpY2UudG9rZW4gIHx8IG51bGw7XHJcbiAgICAgICAganNvbk9iai5TdWJQYWNrZXQgPSB7fTtcclxuICAgICAgICBqc29uT2JqLlBsYXRmb3JtID0gJ3dlYmInIDsgLy8gdGhpcy5kZXZpY2UuZGV2aWNlSW5mb3JtYXRpb24uZGV2aWNlVHlwZTtcclxuICAgICAgICBqc29uT2JqLkNsaWVudFR5cGUgPSAnT1N0JzsgLy8gaGlzLmRldmljZS5kZXZpY2VJbmZvcm1hdGlvbi5vcztcclxuICAgICAgICBqc29uT2JqLk9yaWdpbiA9ICdvcmlnaW4nOyAvLyB0aGlzLmRldmljZS5kZXZpY2VJbmZvcm1hdGlvbi5tb2RlbDtcclxuICAgICAgICBqc29uT2JqLlZlcnNpb25Db2RlID0gZW52aXJvbm1lbnQudmVyc2lvbkNvZGU7XHJcbiAgICAgICAganNvbk9iai5TdWJQYWNrZXQuX190eXBlID0gdHlwZSArICc6wqR0V29ya3MuQWxmYS5BbGZhQ3VzdG9tZXJKU09OUHJvdG9jb2wuRGF0YVBhY2tldHMnICsgc3ViRGlyO1xyXG4gICAgICAgIGlmIChwYXJhbWV0ZXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihqc29uT2JqLlN1YlBhY2tldCwgcGFyYW1ldGVycyApOyAvLyBkYXRlIGludG8gbW9tZW50IG9iamVjdFxyXG4gICAgICAgIH1cclxuICAgICAgICBqc29uT2JqLlVzZXJuYW1lID0gdGhpcy51c2Vyc2VydmljZS5BY3RvciA/IHRoaXMudXNlcnNlcnZpY2UuQWN0b3IuVXNlcm5hbWUgOiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4ganNvbk9iajtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2VuZFJlcXVlc3QoYm9keSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChlbnZpcm9ubWVudC5hcGlVcmwsIGJvZHkpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChyZXMgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzWydTdWJQYWNrZXQnXTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgLy8gY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9ycylcclxuICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmhhbmRsZUVycm9ycyBjYWxsZWQgZnJvbSBBUEkgc2VydmljZScpO1xyXG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRXJyb3JPYnNlcnZhYmxlLmNyZWF0ZShuZXcgTm90Rm91bmRFcnJvcihlcnJvcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFcnJvck9ic2VydmFibGUuY3JlYXRlKG5ldyBCYWRJbnB1dChlcnJvcikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIEVycm9yT2JzZXJ2YWJsZS5jcmVhdGUobmV3IEFwcEVycm9yKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
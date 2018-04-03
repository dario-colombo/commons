Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var errorcode_1 = require("./../errorcodes/errorcode");
var router_1 = require("@angular/router");
var dialog_service_1 = require("./../../services/dialog.service");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var serverstream_service_1 = require("../services/serverstream/serverstream.service");
var MyHttpInterceptor = /** @class */ (function () {
    function MyHttpInterceptor(dialog, router, serverStream) {
        this.dialog = dialog;
        this.router = router;
        this.serverStream = serverStream;
        this.ErrorCode = new errorcode_1.ErrorCode();
    }
    MyHttpInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next
            .handle(request)
            .do(function (ev) {
            // VALID RESPONSE
            if (ev instanceof http_1.HttpResponse) {
                // FAULTS IN A VALID RESPONSE
                // console.dir(ev.body );
                //  console.log('ev.body in http');
                if (ev.status === 200 && ev.body.Faults.length > 0) {
                    var message = {
                        title: ev.body.Faults[0].ShortName,
                        message: ev.body.Faults[0].ErrorMessage,
                        okButtonText: 'Ok'
                    };
                    //  console.dir(message);
                    _this.dialog.showDialog(message);
                    // alert(message);
                }
            }
        })
            .catch(function (response) {
            // ERROR RESPONSE
            if (response instanceof http_1.HttpErrorResponse) {
                console.log('HTTP interceptor' + response.status);
                if (_this.ErrorCode.logout.indexOf(response.status) !== -1) {
                    var message = {
                        title: response.status.toString() + response.statusText,
                        message: response.message
                    };
                    //  this.dialog.showDialog(message);
                    // this.router.navigate(['/login']);
                    console.log('should logout');
                    _this.serverStream.reAuthenticate();
                }
                if (_this.ErrorCode.warning.indexOf(response.status) !== -1) {
                    console.log('should warning');
                }
            }
            return ErrorObservable_1.ErrorObservable.create(response);
        });
    };
    MyHttpInterceptor = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [dialog_service_1.DialogService, router_1.Router, serverstream_service_1.ServerstreamService])
    ], MyHttpInterceptor);
    return MyHttpInterceptor;
}());
exports.MyHttpInterceptor = MyHttpInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImh0dHAuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyQztBQUMzQyw2Q0FPOEI7QUFJOUIsZ0NBQThCO0FBQzlCLG1DQUFpQztBQUNqQyx1REFBc0Q7QUFDdEQsMENBQXlDO0FBSXpDLGtFQUFnRTtBQUNoRSxtRUFBa0U7QUFDbEUsc0ZBQW9GO0FBSXBGO0lBQ0UsMkJBQW9CLE1BQXFCLEVBQVUsTUFBYyxFQUFVLFlBQWlDO1FBQXhGLFdBQU0sR0FBTixNQUFNLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBRzVHLGNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUY1QixDQUFDO0lBSUQscUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQ3pCLElBQWlCO1FBRDNCLGlCQTZDQztRQTFDQyxNQUFNLENBQUMsSUFBSTthQUNSLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixFQUFFLENBQUMsVUFBQyxFQUFrQjtZQUNyQixpQkFBaUI7WUFDakIsRUFBRSxDQUFDLENBQUMsRUFBRSxZQUFZLG1CQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUMvQiw2QkFBNkI7Z0JBQzdCLHlCQUF5QjtnQkFDekIsbUNBQW1DO2dCQUNuQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkQsSUFBTSxPQUFPLEdBQXdCO3dCQUNuQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUzt3QkFDbEMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7d0JBQ3ZDLFlBQVksRUFBRSxJQUFJO3FCQUNuQixDQUFDO29CQUNGLHlCQUF5QjtvQkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLGtCQUFrQjtnQkFDcEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxRQUFRO1lBQ2IsaUJBQWlCO1lBQ2pCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsWUFBWSx3QkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUdsRCxFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUQsSUFBTSxPQUFPLEdBQXdCO3dCQUNuQyxLQUFLLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxRQUFRLENBQUMsVUFBVTt3QkFDdkQsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO3FCQUMxQixDQUFDO29CQUNKLG9DQUFvQztvQkFDbkMsb0NBQW9DO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM3QixLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNyQyxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTSxDQUFDLGlDQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5EVSxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FFaUIsOEJBQWEsRUFBa0IsZUFBTSxFQUF3QiwwQ0FBbUI7T0FEakcsaUJBQWlCLENBc0Q3QjtJQUFELHdCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBJbnRlcmNlcHRvcixcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSGFuZGxlcixcclxuICBIdHRwRXZlbnQsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG4gIEh0dHBFcnJvclJlc3BvbnNlXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RvJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcbmltcG9ydCB7IEVycm9yQ29kZSB9IGZyb20gJy4vLi4vZXJyb3Jjb2Rlcy9lcnJvcmNvZGUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgRGlhbG9nTWVzc2FnZUZvcm1hdCB9IGZyb20gJy4uL21vZGVscy9kaWFsb2dtZXNzYWdlZm9ybWF0JztcclxuXHJcbmltcG9ydCB7IERpYWxvZ1NlcnZpY2UgfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXJyb3JPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9vYnNlcnZhYmxlL0Vycm9yT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFNlcnZlcnN0cmVhbVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXJ2ZXJzdHJlYW0vc2VydmVyc3RyZWFtLnNlcnZpY2UnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYWxvZzogRGlhbG9nU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBzZXJ2ZXJTdHJlYW06IFNlcnZlcnN0cmVhbVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIEVycm9yQ29kZSA9IG5ldyBFcnJvckNvZGUoKTtcclxuXHJcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICAgICAgICAgIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG5cclxuICAgIHJldHVybiBuZXh0XHJcbiAgICAgIC5oYW5kbGUocmVxdWVzdClcclxuICAgICAgLmRvKChldjogSHR0cEV2ZW50PGFueT4pID0+IHtcclxuICAgICAgICAvLyBWQUxJRCBSRVNQT05TRVxyXG4gICAgICAgIGlmIChldiBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgLy8gRkFVTFRTIElOIEEgVkFMSUQgUkVTUE9OU0VcclxuICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKGV2LmJvZHkgKTtcclxuICAgICAgICAgIC8vICBjb25zb2xlLmxvZygnZXYuYm9keSBpbiBodHRwJyk7XHJcbiAgICAgICAgICBpZiAoZXYuc3RhdHVzID09PSAyMDAgJiYgZXYuYm9keS5GYXVsdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlOiBEaWFsb2dNZXNzYWdlRm9ybWF0ID0ge1xyXG4gICAgICAgICAgICAgIHRpdGxlOiBldi5ib2R5LkZhdWx0c1swXS5TaG9ydE5hbWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXYuYm9keS5GYXVsdHNbMF0uRXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogJ09rJ1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvLyAgY29uc29sZS5kaXIobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlhbG9nLnNob3dEaWFsb2cobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAvLyBFUlJPUiBSRVNQT05TRVxyXG4gICAgICAgIGlmIChyZXNwb25zZSBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSFRUUCBpbnRlcmNlcHRvcicgKyByZXNwb25zZS5zdGF0dXMpO1xyXG5cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5FcnJvckNvZGUubG9nb3V0LmluZGV4T2YocmVzcG9uc2Uuc3RhdHVzKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogRGlhbG9nTWVzc2FnZUZvcm1hdCA9IHtcclxuICAgICAgICAgICAgICB0aXRsZTogcmVzcG9uc2Uuc3RhdHVzLnRvU3RyaW5nKCkgKyByZXNwb25zZS5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLm1lc3NhZ2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIC8vICB0aGlzLmRpYWxvZy5zaG93RGlhbG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIGxvZ291dCcpO1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlclN0cmVhbS5yZUF1dGhlbnRpY2F0ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuRXJyb3JDb2RlLndhcm5pbmcuaW5kZXhPZihyZXNwb25zZS5zdGF0dXMpICE9PSAtMSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2hvdWxkIHdhcm5pbmcnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEVycm9yT2JzZXJ2YWJsZS5jcmVhdGUocmVzcG9uc2UpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=
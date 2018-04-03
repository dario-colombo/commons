Object.defineProperty(exports, "__esModule", { value: true });
// date.interceptor.ts
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var moment = require("moment");
var DateInterceptor = /** @class */ (function () {
    function DateInterceptor() {
    }
    DateInterceptor.prototype.intercept = function (request, next) {
        var iterateOverObjectProperties = function (obj, transformFunction) {
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    transformFunction(i, obj);
                    if ((obj[i] instanceof Object)) {
                        iterateOverObjectProperties(obj[i], transformFunction);
                    }
                }
            }
            // return null;
        };
        var transformStringToTime = function (key, object) {
            var regExpression = /\/Date\((-?\d+\+?\d*)\)\//.exec(object[key]);
            if (regExpression != null && regExpression[1]) {
                object[key] = moment(parseInt(regExpression[1], 10));
            }
        };
        var transformTimeToString = function (key, object) {
            if (object[key] instanceof Date) {
                object[key] = '/Date(' + object[key].getTime() + ')/';
            }
        };
        // const copy = Object.assign({}, request.body);
        var DateToString = function (body) {
            iterateOverObjectProperties(body, transformTimeToString);
            return body;
        };
        // const transform = JSON.stringify(transfomed(copy));
        var customReq = request.clone({ body: DateToString(request.body) });
        return next.handle(customReq)
            .do(function (ev) {
            // VALID RESPONSE
            if (ev instanceof http_1.HttpResponse) {
                // FAULTS IN A VALID RESPONSE
                // console.dir(ev.body );
                iterateOverObjectProperties(ev.body, transformStringToTime);
                // console.log('ev.body in date');
            }
        });
    };
    DateInterceptor = __decorate([
        core_1.Injectable()
    ], DateInterceptor);
    return DateInterceptor;
}());
exports.DateInterceptor = DateInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGUuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHNCQUFzQjtBQUN0QixzQ0FBMkM7QUFFM0MsNkNBTzhCO0FBRTlCLCtCQUFpQztBQUdqQztJQUFBO0lBOENBLENBQUM7SUE3Q0csbUNBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFFbEQsSUFBTSwyQkFBMkIsR0FBRyxVQUFDLEdBQUcsRUFBRSxpQkFBaUI7WUFDdkQsR0FBRyxDQUFDLENBQUMsSUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLGlCQUFpQixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3QiwyQkFBMkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztvQkFDM0QsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQUNGLGVBQWU7UUFDbEIsQ0FBQyxDQUFDO1FBQ0YsSUFBTSxxQkFBcUIsR0FBRyxVQUFVLEdBQUcsRUFBRSxNQUFNO1lBQy9DLElBQU0sYUFBYSxHQUFHLDJCQUEyQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwRSxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3pELENBQUM7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFNLHFCQUFxQixHQUFHLFVBQVUsR0FBRyxFQUFFLE1BQU07WUFDL0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztZQUMxRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBRUgsZ0RBQWdEO1FBQy9DLElBQU0sWUFBWSxHQUFHLFVBQVUsSUFBSTtZQUMvQiwyQkFBMkIsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUNILHNEQUFzRDtRQUVyRCxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUM1QixFQUFFLENBQUMsVUFBQyxFQUFrQjtZQUNuQixpQkFBaUI7WUFDZixFQUFFLENBQUMsQ0FBQyxFQUFFLFlBQVksbUJBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLDZCQUE2QjtnQkFDOUIseUJBQXlCO2dCQUN4QiwyQkFBMkIsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBQzdELGtDQUFrQztZQUNyQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0NRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTtPQUNBLGVBQWUsQ0E4QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBkYXRlLmludGVyY2VwdG9yLnRzXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBIdHRwSW50ZXJjZXB0b3IsXHJcbiAgICBIdHRwUmVxdWVzdCxcclxuICAgIEh0dHBIYW5kbGVyLFxyXG4gICAgSHR0cEV2ZW50LFxyXG4gICAgSHR0cFJlc3BvbnNlLFxyXG4gICAgSHR0cEVycm9yUmVzcG9uc2VcclxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGVJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XHJcbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZXJhdGVPdmVyT2JqZWN0UHJvcGVydGllcyA9IChvYmosIHRyYW5zZm9ybUZ1bmN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1GdW5jdGlvbihpLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgob2JqW2ldIGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVyYXRlT3Zlck9iamVjdFByb3BlcnRpZXMob2JqW2ldLCB0cmFuc2Zvcm1GdW5jdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgLy8gcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCB0cmFuc2Zvcm1TdHJpbmdUb1RpbWUgPSBmdW5jdGlvbiAoa2V5LCBvYmplY3QpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnRXhwcmVzc2lvbiA9IC9cXC9EYXRlXFwoKC0/XFxkK1xcKz9cXGQqKVxcKVxcLy8uZXhlYyhvYmplY3Rba2V5XSk7XHJcbiAgICAgICAgICAgIGlmIChyZWdFeHByZXNzaW9uICE9IG51bGwgJiYgcmVnRXhwcmVzc2lvblsxXSkge1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBtb21lbnQocGFyc2VJbnQocmVnRXhwcmVzc2lvblsxXSwgMTApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtVGltZVRvU3RyaW5nID0gZnVuY3Rpb24gKGtleSwgb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChvYmplY3Rba2V5XSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIG9iamVjdFtrZXldID0gJy9EYXRlKCcgKyBvYmplY3Rba2V5XS5nZXRUaW1lKCkgKyAnKS8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAvLyBjb25zdCBjb3B5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWVzdC5ib2R5KTtcclxuICAgICAgICBjb25zdCBEYXRlVG9TdHJpbmcgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICBpdGVyYXRlT3Zlck9iamVjdFByb3BlcnRpZXMoYm9keSwgdHJhbnNmb3JtVGltZVRvU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICAgICAgfTtcclxuICAgICAgIC8vIGNvbnN0IHRyYW5zZm9ybSA9IEpTT04uc3RyaW5naWZ5KHRyYW5zZm9tZWQoY29weSkpO1xyXG5cclxuICAgICAgICBjb25zdCBjdXN0b21SZXEgPSByZXF1ZXN0LmNsb25lKHsgYm9keTogRGF0ZVRvU3RyaW5nKHJlcXVlc3QuYm9keSl9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKGN1c3RvbVJlcSlcclxuICAgICAgICAuZG8oKGV2OiBIdHRwRXZlbnQ8YW55PikgPT4ge1xyXG4gICAgICAgICAgICAvLyBWQUxJRCBSRVNQT05TRVxyXG4gICAgICAgICAgICAgIGlmIChldiBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRkFVTFRTIElOIEEgVkFMSUQgUkVTUE9OU0VcclxuICAgICAgICAgICAgICAgLy8gY29uc29sZS5kaXIoZXYuYm9keSApO1xyXG4gICAgICAgICAgICAgICAgaXRlcmF0ZU92ZXJPYmplY3RQcm9wZXJ0aWVzKGV2LmJvZHksIHRyYW5zZm9ybVN0cmluZ1RvVGltZSk7XHJcbiAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdldi5ib2R5IGluIGRhdGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
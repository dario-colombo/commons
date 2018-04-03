Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var serverstream_service_1 = require("./serverstream.service");
require("rxjs/add/operator/delay");
var Resolver = /** @class */ (function () {
    function Resolver(serverstreamService) {
        this.serverstreamService = serverstreamService;
    }
    Resolver.prototype.resolve = function (route, state) {
        console.log('resolving');
        return this.serverstreamService.getMessage$(); ////  .subscribe();//
    };
    Resolver = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(serverstream_service_1.ServerstreamService)),
        __metadata("design:paramtypes", [serverstream_service_1.ServerstreamService])
    ], Resolver);
    return Resolver;
}());
exports.Resolver = Resolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQW1EO0FBRW5ELCtEQUE2RDtBQUU3RCxtQ0FBaUM7QUFJakM7SUFFSSxrQkFBaUQsbUJBQXdDO1FBQXhDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFBRyxDQUFDO0lBRTdGLDBCQUFPLEdBQVAsVUFBUSxLQUE2QixFQUM3QixLQUEwQjtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRS9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxxQkFBcUI7SUFDdEUsQ0FBQztJQVRRLFFBQVE7UUFEcEIsaUJBQVUsRUFBRTtRQUdJLFdBQUEsYUFBTSxDQUFDLDBDQUFtQixDQUFDLENBQUE7eUNBQThCLDBDQUFtQjtPQUZoRixRQUFRLENBVXBCO0lBQUQsZUFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2ZXJzdHJlYW1TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2ZXJzdHJlYW0uc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSZXNvbHZlciBpbXBsZW1lbnRzIFJlc29sdmU8T2JzZXJ2YWJsZTxhbnk+PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoQEluamVjdChTZXJ2ZXJzdHJlYW1TZXJ2aWNlKSBwcml2YXRlIHNlcnZlcnN0cmVhbVNlcnZpY2U6IFNlcnZlcnN0cmVhbVNlcnZpY2UpIHt9XHJcblxyXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcclxuICAgICAgICAgICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGFueT58UHJvbWlzZTxhbnk+fGFueSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNvbHZpbmcnKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnNlcnZlcnN0cmVhbVNlcnZpY2UuZ2V0TWVzc2FnZSQoKTsgLy8vLyAgLnN1YnNjcmliZSgpOy8vXHJcbiAgICB9XHJcbn1cclxuIl19
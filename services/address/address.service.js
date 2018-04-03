Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../../factories/http.factory");
var core_1 = require("@angular/core");
var map_1 = require("rxjs/operators/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/throttleTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
var AddressService = /** @class */ (function () {
    function AddressService(_httpfactory) {
        this._httpfactory = _httpfactory;
    }
    AddressService.prototype.search = function (terms) {
        var _this = this;
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.SearchAddress(term); });
    };
    AddressService.prototype.SearchAddress = function (string) {
        var body = this._httpfactory.buildPost('SearchAddress', {
            SearchString: string
        });
        return this._httpfactory.sendRequest(body)
            .pipe(map_1.map(function (data) {
            if (data) {
                return data.AddressList;
            }
        }));
    };
    AddressService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_factory_1.HttpFactory)),
        __metadata("design:paramtypes", [http_factory_1.HttpFactory])
    ], AddressService);
    return AddressService;
}());
exports.AddressService = AddressService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWRkcmVzcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2REFBMkQ7QUFDM0Qsc0NBQW1EO0FBQ25ELDBDQUF5QztBQUV6QywwQ0FBd0M7QUFDeEMsMENBQXdDO0FBQ3hDLGtEQUFnRDtBQUNoRCx1Q0FBcUM7QUFNckM7SUFFSSx3QkFBeUMsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFDbEUsQ0FBQztJQUVELCtCQUFNLEdBQU4sVUFBTyxLQUF5QjtRQUFoQyxpQkFJQztRQUhHLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzthQUN6QixvQkFBb0IsRUFBRTthQUN0QixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUdELHNDQUFhLEdBQWIsVUFBYyxNQUFjO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUNwQyxlQUFlLEVBQ2Y7WUFDSSxZQUFZLEVBQUUsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3JDLElBQUksQ0FDRCxTQUFHLENBQUMsVUFBQyxJQUFJO1lBQ0wsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUM1QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQ0wsQ0FBQztJQUVWLENBQUM7SUEzQlEsY0FBYztRQUQxQixpQkFBVSxFQUFFO1FBR0ksV0FBQSxhQUFNLENBQUMsMEJBQVcsQ0FBQyxDQUFBO3lDQUF1QiwwQkFBVztPQUZ6RCxjQUFjLENBNEIxQjtJQUFELHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRmFjdG9yeSB9IGZyb20gJy4uLy4uL2ZhY3Rvcmllcy9odHRwLmZhY3RvcnknO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMvbWFwJztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZGVib3VuY2VUaW1lJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90aHJvdHRsZVRpbWUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2Rpc3RpbmN0VW50aWxDaGFuZ2VkJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRkcmVzc1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoSHR0cEZhY3RvcnkpIHByaXZhdGUgX2h0dHBmYWN0b3J5OiBIdHRwRmFjdG9yeSkge1xyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaCh0ZXJtczogT2JzZXJ2YWJsZTxzdHJpbmc+KSB7XHJcbiAgICAgICAgcmV0dXJuIHRlcm1zLmRlYm91bmNlVGltZSg0MDApXHJcbiAgICAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgICAgICAgIC5zd2l0Y2hNYXAodGVybSA9PiB0aGlzLlNlYXJjaEFkZHJlc3ModGVybSkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBTZWFyY2hBZGRyZXNzKHN0cmluZzogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuX2h0dHBmYWN0b3J5LmJ1aWxkUG9zdChcclxuICAgICAgICAgICAgJ1NlYXJjaEFkZHJlc3MnLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBTZWFyY2hTdHJpbmc6IHN0cmluZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cGZhY3Rvcnkuc2VuZFJlcXVlc3QoYm9keSlcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBtYXAoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5BZGRyZXNzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgIH1cclxufSJdfQ==
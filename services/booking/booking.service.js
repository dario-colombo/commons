Object.defineProperty(exports, "__esModule", { value: true });
var http_factory_1 = require("../../factories/http.factory");
var core_1 = require("@angular/core");
var map_1 = require("rxjs/operators/map");
var BookingService = /** @class */ (function () {
    function BookingService(_httpfactory) {
        this._httpfactory = _httpfactory;
        this.new_booking = {};
    }
    BookingService.prototype.GetBookings = function (request) {
        if (request === void 0) { request = {}; }
        var body = this._httpfactory.buildPost('GetBookings', {
            StartDate: request.StartDate,
            EndDate: request.EndDate,
            Limit: request.Limit,
            Offset: request.Offset
        });
        return this._httpfactory.sendRequest(body)
            .pipe(//  concatMap(data => Observable.of(data).delay(20000)),
        map_1.map(function (data) {
            if (data) {
                return data.BookingList;
            }
        }));
    };
    BookingService.prototype.GetSpecificBooking = function (BookingId) {
        var body = this._httpfactory.buildPost('GetSpecificBooking', {
            BookingId: BookingId
        });
        return this._httpfactory.sendRequest(body)
            .pipe(map_1.map(function (data) {
            if (data) {
                // console.log('GetSpecificBooking ');
                // console.log(data);
                return data;
            }
        }));
    };
    BookingService.prototype.GetBookingSolution = function (request) {
        var body = this._httpfactory.buildPost('GetBookingSolution', request);
        return this._httpfactory.sendRequest(body)
            .pipe(map_1.map(function (data) {
            if (data) {
                //  console.log('GetBookingSolution ');
                // console.log(data);
                return data;
            }
        }));
    };
    BookingService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_factory_1.HttpFactory)),
        __metadata("design:paramtypes", [http_factory_1.HttpFactory])
    ], BookingService);
    return BookingService;
}());
exports.BookingService = BookingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9va2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw2REFBMkQ7QUFDM0Qsc0NBQW1EO0FBQ25ELDBDQUF5QztBQUl6QztJQUdFLHdCQUF5QyxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUZsRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQUdqQixDQUFDO0lBR0Qsb0NBQVcsR0FBWCxVQUFZLE9BQWdDO1FBQWhDLHdCQUFBLEVBQUEsWUFBZ0M7UUFDMUMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQ3RDLGFBQWEsRUFDYjtZQUNFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUztZQUM1QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87WUFDeEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUM7UUFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3ZDLElBQUksQ0FBZSx3REFBd0Q7UUFFMUUsU0FBRyxDQUFDLFVBQUMsSUFBSTtZQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFFTixDQUFDO0lBRUQsMkNBQWtCLEdBQWxCLFVBQW1CLFNBQWlCO1FBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUN0QyxvQkFBb0IsRUFDcEI7WUFDRSxTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQUM7UUFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3ZDLElBQUksQ0FDSCxTQUFHLENBQUMsVUFBQyxJQUFJO1lBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDVCxzQ0FBc0M7Z0JBQ3RDLHFCQUFxQjtnQkFDckIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBRU4sQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixPQUEyQjtRQUM1QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDdEMsb0JBQW9CLEVBQ3BCLE9BQU8sQ0FBQyxDQUFDO1FBRVgsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUN2QyxJQUFJLENBQ0gsU0FBRyxDQUFDLFVBQUMsSUFBSTtZQUNQLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1QsdUNBQXVDO2dCQUN2QyxxQkFBcUI7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7SUFoRVUsY0FBYztRQUQxQixpQkFBVSxFQUFFO1FBSUUsV0FBQSxhQUFNLENBQUMsMEJBQVcsQ0FBQyxDQUFBO3lDQUF1QiwwQkFBVztPQUh2RCxjQUFjLENBbUUxQjtJQUFELHFCQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRCb29raW5nc1JlcXVlc3QsIEJvb2tpbmdMaXN0SXRlbSwgR2V0Qm9va2luZ1NvbHV0aW9uLCBOZXdCb29raW5nIH0gZnJvbSAnLi8uLi8uLi9tb2RlbHMvYm9va2luZyc7XHJcbmltcG9ydCB7IEh0dHBGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZmFjdG9yaWVzL2h0dHAuZmFjdG9yeSc7XHJcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycy9tYXAnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJvb2tpbmdTZXJ2aWNlIHtcclxuICBuZXdfYm9va2luZyA9IHt9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEh0dHBGYWN0b3J5KSBwcml2YXRlIF9odHRwZmFjdG9yeTogSHR0cEZhY3RvcnkpIHtcclxuICB9XHJcblxyXG5cclxuICBHZXRCb29raW5ncyhyZXF1ZXN0OiBHZXRCb29raW5nc1JlcXVlc3QgPSB7fSkge1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuX2h0dHBmYWN0b3J5LmJ1aWxkUG9zdChcclxuICAgICAgJ0dldEJvb2tpbmdzJyxcclxuICAgICAge1xyXG4gICAgICAgIFN0YXJ0RGF0ZTogcmVxdWVzdC5TdGFydERhdGUsXHJcbiAgICAgICAgRW5kRGF0ZTogcmVxdWVzdC5FbmREYXRlLFxyXG4gICAgICAgIExpbWl0OiByZXF1ZXN0LkxpbWl0LFxyXG4gICAgICAgIE9mZnNldDogcmVxdWVzdC5PZmZzZXRcclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBmYWN0b3J5LnNlbmRSZXF1ZXN0KGJvZHkpXHJcbiAgICAgIC5waXBlKCAgICAgICAgICAgICAgLy8gIGNvbmNhdE1hcChkYXRhID0+IE9ic2VydmFibGUub2YoZGF0YSkuZGVsYXkoMjAwMDApKSxcclxuXHJcbiAgICAgICAgbWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5Cb29raW5nTGlzdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICB9XHJcblxyXG4gIEdldFNwZWNpZmljQm9va2luZyhCb29raW5nSWQ6IG51bWJlcikge1xyXG4gICAgY29uc3QgYm9keSA9IHRoaXMuX2h0dHBmYWN0b3J5LmJ1aWxkUG9zdChcclxuICAgICAgJ0dldFNwZWNpZmljQm9va2luZycsXHJcbiAgICAgIHtcclxuICAgICAgICBCb29raW5nSWQ6IEJvb2tpbmdJZFxyXG4gICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faHR0cGZhY3Rvcnkuc2VuZFJlcXVlc3QoYm9keSlcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnR2V0U3BlY2lmaWNCb29raW5nICcpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuXHJcbiAgfVxyXG5cclxuICBHZXRCb29raW5nU29sdXRpb24ocmVxdWVzdDogR2V0Qm9va2luZ1NvbHV0aW9uKSB7XHJcbiAgICBjb25zdCBib2R5ID0gdGhpcy5faHR0cGZhY3RvcnkuYnVpbGRQb3N0KFxyXG4gICAgICAnR2V0Qm9va2luZ1NvbHV0aW9uJyxcclxuICAgICAgcmVxdWVzdCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHBmYWN0b3J5LnNlbmRSZXF1ZXN0KGJvZHkpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKCdHZXRCb29raW5nU29sdXRpb24gJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
Object.defineProperty(exports, "__esModule", { value: true });
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    // constructor(dialogservice: DialogService ) {}
    AppErrorHandler.prototype.handleError = function (error) {
        //  console.log(error);
        // console.dir(error);
        console.log('AppErrorHandler implements ErrorHandler invoked');
        console.dir(error);
        // alert("enexpected error");
    };
    return AppErrorHandler;
}());
exports.AppErrorHandler = AppErrorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWVycm9yLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAtZXJyb3ItaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFBQTtJQVVBLENBQUM7SUFSRSxnREFBZ0Q7SUFDL0MscUNBQVcsR0FBWCxVQUFZLEtBQUs7UUFDZix1QkFBdUI7UUFDdEIsc0JBQXNCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaURBQWlELENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BCLDZCQUE2QjtJQUNoQyxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmV4cG9ydCBjbGFzcyBBcHBFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIge1xyXG5cclxuICAgLy8gY29uc3RydWN0b3IoZGlhbG9nc2VydmljZTogRGlhbG9nU2VydmljZSApIHt9XHJcbiAgICBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgLy8gY29uc29sZS5kaXIoZXJyb3IpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBcHBFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBFcnJvckhhbmRsZXIgaW52b2tlZCcpO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcclxuICAgICAgIC8vIGFsZXJ0KFwiZW5leHBlY3RlZCBlcnJvclwiKTtcclxuICAgIH1cclxufVxyXG4iXX0=
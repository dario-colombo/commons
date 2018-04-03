Object.defineProperty(exports, "__esModule", { value: true });
var app_error_1 = require("./app-error");
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(originalError) {
        var _this = _super.call(this) || this;
        _this.originalError = originalError;
        var options = {
            title: originalError.statusText,
            message: originalError.message,
            okButtonText: 'NOT FOUND'
        };
        console.log('NotFoundError');
        return _this;
        // console.dir(originalError);
        //  alert(options)
    }
    return NotFoundError;
}(app_error_1.AppError));
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90LWZvdW5kLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibm90LWZvdW5kLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBdUM7QUFDdkM7SUFBbUMsaUNBQVE7SUFFdkMsdUJBQW1CLGFBQW1CO1FBQXRDLFlBQ0ksaUJBQU8sU0FZVjtRQWJrQixtQkFBYSxHQUFiLGFBQWEsQ0FBTTtRQUVsQyxJQUFNLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxhQUFhLENBQUMsVUFBVTtZQUMvQixPQUFPLEVBQUUsYUFBYSxDQUFDLE9BQU87WUFDOUIsWUFBWSxFQUFFLFdBQVc7U0FDNUIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7O1FBQ2pDLDhCQUE4QjtRQUM1QixrQkFBa0I7SUFHcEIsQ0FBQztJQUdMLG9CQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUFtQyxvQkFBUSxHQWtCMUM7QUFsQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBFcnJvciB9IGZyb20gJy4vYXBwLWVycm9yJztcclxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBBcHBFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9yaWdpbmFsRXJyb3I/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBvcmlnaW5hbEVycm9yLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG9yaWdpbmFsRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnTk9UIEZPVU5EJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOb3RGb3VuZEVycm9yJyk7XHJcbiAgICAvLyBjb25zb2xlLmRpcihvcmlnaW5hbEVycm9yKTtcclxuICAgICAgLy8gIGFsZXJ0KG9wdGlvbnMpXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
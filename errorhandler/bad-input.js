Object.defineProperty(exports, "__esModule", { value: true });
var app_error_1 = require("./app-error");
var BadInput = /** @class */ (function (_super) {
    __extends(BadInput, _super);
    function BadInput(originalError) {
        var _this = _super.call(this) || this;
        _this.originalError = originalError;
        var options = {
            title: originalError.statusText,
            message: originalError.message,
            okButtonText: 'BAD INPUT'
        };
        console.log('BadInput');
        return _this;
        // console.dir(originalError);
        // alert(options)
    }
    return BadInput;
}(app_error_1.AppError));
exports.BadInput = BadInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkLWlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFkLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBdUM7QUFDdkM7SUFBOEIsNEJBQVE7SUFFbEMsa0JBQW1CLGFBQW1CO1FBQXRDLFlBQ0ksaUJBQU8sU0FZVjtRQWJrQixtQkFBYSxHQUFiLGFBQWEsQ0FBTTtRQUVsQyxJQUFNLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxhQUFhLENBQUMsVUFBVTtZQUMvQixPQUFPLEVBQUUsYUFBYSxDQUFDLE9BQU87WUFDOUIsWUFBWSxFQUFFLFdBQVc7U0FDNUIsQ0FBQztRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7O1FBQ3pCLDhCQUE4QjtRQUM5QixpQkFBaUI7SUFHcEIsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDLEFBakJELENBQThCLG9CQUFRLEdBaUJyQztBQWpCWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEVycm9yIH0gZnJvbSAnLi9hcHAtZXJyb3InO1xyXG5leHBvcnQgY2xhc3MgQmFkSW5wdXQgZXh0ZW5kcyBBcHBFcnJvciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIG9yaWdpbmFsRXJyb3I/OiBhbnkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBvcmlnaW5hbEVycm9yLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IG9yaWdpbmFsRXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQkFEIElOUFVUJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCYWRJbnB1dCcpO1xyXG4gICAgICAgLy8gY29uc29sZS5kaXIob3JpZ2luYWxFcnJvcik7XHJcbiAgICAgICAvLyBhbGVydChvcHRpb25zKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
Object.defineProperty(exports, "__esModule", { value: true });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
        this.originalError = originalError;
        console.log('AppError');
        if (originalError) {
            console.log(originalError.name);
            console.log(originalError.message);
        }
        // console.dir(originalError);
        // alert(originalError)
    }
    return AppError;
}());
exports.AppError = AppError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLWVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtJQUNJLGtCQUFtQixhQUFtQjtRQUFuQixrQkFBYSxHQUFiLGFBQWEsQ0FBTTtRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUVGLDhCQUE4QjtRQUM5Qix1QkFBdUI7SUFDMUIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwcEVycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvcmlnaW5hbEVycm9yPzogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FwcEVycm9yJyk7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxFcnJvci5uYW1lKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob3JpZ2luYWxFcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5kaXIob3JpZ2luYWxFcnJvcik7XHJcbiAgICAgICAvLyBhbGVydChvcmlnaW5hbEVycm9yKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==
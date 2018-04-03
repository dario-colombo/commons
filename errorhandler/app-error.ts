export class AppError {
    constructor(public originalError?: any) {
        console.log('AppError');
        if (originalError) {
            console.log(originalError.name);
            console.log(originalError.message);
        }

       // console.dir(originalError);
       // alert(originalError)
    }
}

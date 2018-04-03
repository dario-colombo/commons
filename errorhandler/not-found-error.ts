import { AppError } from './app-error';
export class NotFoundError extends AppError {

    constructor(public originalError?: any) {
        super();
        const options = {
            title: originalError.statusText,
            message: originalError.message,
            okButtonText: 'NOT FOUND'
        };

        console.log('NotFoundError');
    // console.dir(originalError);
      //  alert(options)


    }


}

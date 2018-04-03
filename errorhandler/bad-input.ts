import { AppError } from './app-error';
export class BadInput extends AppError {

    constructor(public originalError?: any) {
        super();
        const options = {
            title: originalError.statusText,
            message: originalError.message,
            okButtonText: 'BAD INPUT'
        };

        console.log('BadInput');
       // console.dir(originalError);
       // alert(options)


    }

}

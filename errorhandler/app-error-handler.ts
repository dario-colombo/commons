import { ErrorHandler } from '@angular/core';
export class AppErrorHandler implements ErrorHandler {

   // constructor(dialogservice: DialogService ) {}
    handleError(error) {
      //  console.log(error);
       // console.dir(error);
        console.log('AppErrorHandler implements ErrorHandler invoked');
        console.dir(error);
       // alert("enexpected error");
    }
}

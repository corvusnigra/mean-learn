import {EventEmitter, Injectable} from "@angular/core";
import {Error} from "./error.model"


@Injectable()

export class ErrorService {
    constructor(){
    }
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any){
        const errorData = new Error(error.title, error.error.error);
        this.errorOccurred.emit(errorData);
    }
}
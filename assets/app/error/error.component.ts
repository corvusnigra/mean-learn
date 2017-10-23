import {Component, OnInit} from "@angular/core";
import {Error} from "./error.model";
import {ErrorService} from "./error.service";
import {error} from "util";
@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styles: [`
       .backdrop {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100vh;
         background: rgba(0,0,0, .6);
       }
    `]
})


export class ErrorComponent implements OnInit{
    error: Error;
    display: string =  'none';

    constructor(private errorService: ErrorService){

    }

    onErrorHandled(){
        this.display = 'none';
    }

    ngOnInit(){
        this.errorService.errorOccurred
            .subscribe(
                error => {
                    this.error = error;
                    console.log(error)
                    this.display = 'block';
                }
            )
    }


}
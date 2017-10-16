import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent {

    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset()
    }

    ngOnInit(){

        this.myForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        })

    }

}
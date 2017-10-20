import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "./user.model";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent {

    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router){

    }

    onSubmit(){
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.signup(user)
            .subscribe(
                (data: any) => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => {
                    console.log(error);
                }
            )
        this.myForm.reset()
    }

    ngOnInit(){

        this.myForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required)
        })

    }

}
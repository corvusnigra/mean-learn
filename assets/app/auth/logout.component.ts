import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-logout',
    template: `
        <div class="btn btn-danger" (click)="onLogout()">Logout</div>
    `
})
export class LogoutComponent {

    constructor(private authService: AuthService, private router: Router) {

    }

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth','signup']);
    }
}
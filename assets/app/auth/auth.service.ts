import { Http, Response, Headers } from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import {User} from "./user.model";
import {Observable} from "rxjs";
import {ErrorService} from "../error/error.service";


@Injectable()
export class AuthService {
    constructor(
        private http: Http,
        private errorService: ErrorService
    ){}

    signin(user: User){
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(user);
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())});
    }

    signup(user: User){
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(user);
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())});
    }

    logout(){
        localStorage.clear();
    }

    isLoggedIn(){
        return localStorage.getItem('token') !== null;
    }

}
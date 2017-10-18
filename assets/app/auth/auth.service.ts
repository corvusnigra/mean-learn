import { Http, Response, Headers } from "@angular/http";
import { Injectable} from "@angular/core";
import 'rxjs/Rx';
import {User} from "./user.model";
import {Observable} from "rxjs";


@Injectable()
export class AuthService {
    constructor(private http: Http){}

    signin(user: User){
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(user);
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}
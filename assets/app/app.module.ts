import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./message/message.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageList} from "./message/message-list.component";
import {MessageInputComponent} from "./message/message-input.component";
import {MessageService} from "./message/message.service";
import {HeaderComponent} from "./header.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MessagesComponent} from "./message/messages.component";
import {routing} from "./app.routing";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./error/error.component";
import {ErrorService} from "./error/error.service";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageList,
        MessageInputComponent,
        HeaderComponent,
        AuthenticationComponent,
        MessagesComponent,
        SigninComponent,
        SignupComponent,
        LogoutComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        MessageService,
        AuthService,
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
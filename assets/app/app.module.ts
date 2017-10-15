import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {MessageComponent} from "./message/message.component";
import {FormsModule} from "@angular/forms";
import {MessageList} from "./message/message-list.component";
import {MessageInputComponent} from "./message/message-input.component";
import {MessageService} from "./message/message.service";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageList,
        MessageInputComponent
    ],
    imports: [BrowserModule,
    FormsModule],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
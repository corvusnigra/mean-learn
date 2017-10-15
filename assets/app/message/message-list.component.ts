import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-xs-8 col-xs-offset-2">
            <app-message
                    [message]="message"
                    (clickedEvent)="message.content = $event"
                    *ngFor="let message of messages"
            ></app-message>
        </div>
    
    `
})
export class MessageList implements OnInit{
    messages: Message[];

    constructor(private messageService: MessageService){

    }

    ngOnInit(){
      this.messages = this.messageService.getMessages();
    }

}
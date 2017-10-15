import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";

@Component({
    selector: 'app-input-component',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent {

    constructor(private messageService: MessageService){

    }

    onSave(value: string){
       const message = new Message(value, 'Max');
       this.messageService.addMessage(message);
    }

}
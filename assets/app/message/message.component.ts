import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})

export class MessageComponent {
    @Input() message: Message;
    @Output() clickedEvent = new EventEmitter<string>();

    constructor(private messageService: MessageService){

    }


    onEdit(){
        this.clickedEvent.emit('Add new value')
    }

    onDelete(){
        this.messageService.deleteMessage(this.message);
    }
}
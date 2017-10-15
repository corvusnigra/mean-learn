import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Message} from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})

export class MessageComponent {
    @Input() message: Message;
    @Output() clickedEvent = new EventEmitter<string>()


    onEdit(){
        this.clickedEvent.emit('Add new value')
    }
}
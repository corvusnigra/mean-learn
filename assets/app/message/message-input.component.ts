import {Component, OnInit} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-input-component',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService){

    }

    onSubmit(form: NgForm){
        if(this.message) {
            this.message.content = form.value.content;
            this.message = null;
        } else {
            const message = new Message(form.value.content, 'Max');
            this.messageService.addMessage(message).subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        }

       form.resetForm();
    }

    onClear(form: NgForm){
        form.reset();
        this.message = null;
    }

    ngOnInit(){
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        )
    }

}
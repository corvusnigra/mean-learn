import {Message} from "./message.model";
import {Http, Response, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/Rx";


@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http){
    }


    addMessage(message: Message){
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers})
            .map((response: Response)=> response.json())
            .catch((error)=> Observable.throw(error.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
            .map((response: Response) => {
                let messages = response.json().obj;
                const transformedMessages: Message[] = [];
                for(let message of messages) {
                    transformedMessages.push(new Message(message.content, 'Dummy', message.id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
    }

    editMessage(message: Message){
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message){

    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message), 1);
    }

}
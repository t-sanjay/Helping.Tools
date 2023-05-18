import { Component } from '@angular/core';
import { SimpleToolsService } from '../simple-tools.service';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css']
})
export class ChatGptComponent {
  sourceURL = 'https://app.insertchatgpt.com/embed/01c53535-deb7-4c33-8057-37ef972cb1da'

  constructor(private apiService: SimpleToolsService){

  }
  

}

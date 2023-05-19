import { Component } from '@angular/core';
import { SimpleToolsService } from '../simple-tools.service';
import { ChatWithBot } from '../models/gpt-model';
import { ResponseModel } from '../models/gpt-model';
import { gptModels } from '../models/constants';
import { Configuration, OpenAIApi } from 'openai';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-chat-gpt',
  templateUrl: './chat-gpt.component.html',
  styleUrls: ['./chat-gpt.component.css']
})
export class ChatGptComponent {
  chatConversation: ChatWithBot[]=[];
  response!: ResponseModel | undefined;
      gptModels = gptModels
      promptText = '';
      showSpinner = false;
  
    constructor() { }
  
    ngOnInit(): void {
    }
  
    checkResponse() {
      this.pushChatContent(this.promptText,'You','person');
      this.invokeGPT();
    }
  
  
    pushChatContent(content:string, person:string, cssClass:string) {
      const chatToPush: ChatWithBot = { person:person, response:content, cssClass:cssClass};
      this.chatConversation.push(chatToPush);
    }
  
  
    getText(data:string) {
      return data.split('\n').filter(f=>f.length>0);
    }
  
    async invokeGPT() {
     
  
      if(this.promptText.length<2)
      return;
  
      
  
      try{
        this.response = undefined;
        let configuration = new Configuration({apiKey: environment.openAi.apiKey});
        let openai = new OpenAIApi(configuration);
  
        let requestData={
          model: 'text-davinci-003',//'text-davinci-003',//"text-curie-001",
          prompt: this.promptText,//this.generatePrompt(animal),
          temperature: 0.95,
          max_tokens: 150,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        };
        this.showSpinner = true;
        let apiResponse =  await openai.createCompletion(requestData);
  
        this.response = apiResponse.data as ResponseModel;
        this.pushChatContent(this.response.choices[0].text.trim(),'Bot','bot');
  debugger;
        this.showSpinner = false;
      }catch(error:any) {
        this.showSpinner = false;
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);
          
        }
      }
    }

}

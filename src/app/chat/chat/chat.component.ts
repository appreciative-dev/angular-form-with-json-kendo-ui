import { Component, Input, OnInit, inject } from '@angular/core';
import {
  Message,
  SendMessageEvent,
  User,
} from '@progress/kendo-angular-conversational-ui';
import { FormService } from '../../form/form.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class FormChatComponent implements OnInit {
  hello: Message;
  feed: Message[];
  readonly user: User = {
    id: 0,
  };
  readonly bot: User = {
    id: 1,
  };

  @Input()
  formSubmitPayload;

  ngOnInit(): void {
    this.hello = {
      text: 'Como le va ' + this.formSubmitPayload.name + '?',
      author: this.bot,
    };
    this.feed = [this.hello];
  }

  readonly formService: FormService = inject(FormService);

  public sendMessage(e: SendMessageEvent): void {
    const oracion = this.formService.chatBotReply();
    const echo: Message = {
      author: this.bot,
      text: `${oracion}`,
    };
    this.feed = [...this.feed, e.message, echo];
  }
}

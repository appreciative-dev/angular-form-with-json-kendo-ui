import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatModule } from '@progress/kendo-angular-conversational-ui';
import { ChatService } from './chat.service';
import { FormChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [FormChatComponent],
  exports: [FormChatComponent],
  imports: [CommonModule, ChatModule],
  providers: [ChatService],
})
export class FormChatModule {}

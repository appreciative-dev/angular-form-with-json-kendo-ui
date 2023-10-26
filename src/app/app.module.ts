import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { FormChatModule } from './chat/chat.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormModule, FormChatModule],
  bootstrap: [AppComponent],
})
export class AppModule {}

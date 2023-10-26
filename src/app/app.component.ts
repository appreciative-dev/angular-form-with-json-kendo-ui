import { Component, inject } from '@angular/core';
import { FormService } from './form/form.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly formPayload$: Observable<any> = inject(FormService).getFormPayload();
  formSubmitPayload;
  hasOrder: boolean = true;
  hasChat: boolean;

  formSubmit(form) {
    if (form.valid) {
      this.hasOrder = false;
      this.hasChat = true;
      this.formSubmitPayload = form.value;
    }
  }
}

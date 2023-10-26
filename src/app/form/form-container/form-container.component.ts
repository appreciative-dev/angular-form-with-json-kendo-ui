import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {
  @Input()
  formPayload$: Observable<any> = new Observable();

  @Output()
  formSubmit = new EventEmitter();
}

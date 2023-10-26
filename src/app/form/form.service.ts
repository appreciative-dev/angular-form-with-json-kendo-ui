import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Observable, combineLatest, map, of, switchMap } from 'rxjs';
import { CustomFormControl } from './form.model';
import { departamentos, dichos, platos } from '../chat/chat.data';

@Injectable()
export class FormService {
  readonly departamentos = departamentos;
  readonly dichos = dichos;
  readonly platos = platos;
  readonly formUrl = '/assets/form.json';

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  transformJsonToObject = (): Observable<CustomFormControl[]> =>
    this.httpClient.get<CustomFormControl[]>(this.formUrl);

  getFormPayload = (): Observable<any> =>
    this.transformJsonToObject().pipe(
      switchMap((value) =>
        combineLatest([of(this.createControls(value)), of(value)]).pipe(
          map((form) => ({
            form: form[0],
            data: form[1],
          }))
        )
      )
    );

  private createControls(data) {
    const form = this.formBuilder.group([]);
    data.forEach((field) =>
      form.addControl(
        field.control,
        new FormControl(null, this.bindValidations(field.validations || []))
      )
    );
    return form;
  }

  private bindValidations(validations) {
    if (validations.length > 0) {
      const compose = [];
      validations.forEach((validator) => {
        switch (validator.name) {
          case 'required':
            compose.push(Validators.required);
            break;
          case 'email':
            compose.push(Validators.email);
            break;
          case 'maxlength':
            compose.push(Validators.maxLength(validator.value));
            break;
          case 'minlength':
            compose.push(Validators.minLength(validator.value));
            break;
          case 'max':
            compose.push(Validators.max(validator.value));
            break;
          case 'min':
            compose.push(Validators.min(validator.value));
            break;
        }
        compose.push(validator.validator);
      });
      return Validators.compose(compose);
    }
    return null;
  }

  chatBotReply() {
    const departamentoIndex = Math.floor(
      Math.random() * this.departamentos.length
    );
    const dichosIndex = Math.floor(Math.random() * this.dichos.length);
    const platosIndex = Math.floor(Math.random() * this.platos.length);
    return (
      'En ' +
      this.departamentos[departamentoIndex] +
      ' decimos ' +
      this.dichos[dichosIndex] +
      '. Toma mas ' +
      this.platos[platosIndex] +
      ' por favor!'
    );
  }
}

import { FormControl } from '@angular/forms';

export interface CustomFormControl {
  control: string;
  type: string;
  placeholder: string;
  validations: Array<ControlValidator>;
  options: Array<string>;
}

export interface ControlValidator {
  name: string;
  message: string;
  value: number;
}

export interface FormPayload {
  data: Array<CustomFormControl>;
  form: FormControl;
}

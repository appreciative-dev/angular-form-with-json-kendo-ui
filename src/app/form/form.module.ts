import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormService } from './form.service';
import { HttpClientModule } from '@angular/common/http';
import { FormContainerComponent } from './form-container/form-container.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

@NgModule({
  declarations: [FormContainerComponent],
  exports: [FormContainerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputsModule,
    ButtonsModule,
    LabelModule,
    DropDownsModule,
  ],
  providers: [FormService],
})
export class FormModule {}

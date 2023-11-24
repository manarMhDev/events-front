import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Title1FormComponent } from './title1-form/title1-form.component';
import { Title2FormComponent } from './title2-form/title2-form.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [ReactiveFormsModule , FormsModule,BrowserModule,CommonModule,RouterModule],
    declarations: [ 
      HeaderComponent, FooterComponent, Title1FormComponent, ConfirmAlertComponent ,Title2FormComponent],
    exports: [
      HeaderComponent,FooterComponent],
  })
  export class ComponentsModule {}

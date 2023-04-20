import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountDataComponent } from './account-data/account-data.component';
import { FormDataComponent } from './form-data/form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountDataComponent,
    FormDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

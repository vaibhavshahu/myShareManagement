import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrokerageAddComponent } from './brokerage-add/brokerage-add.component';
import { BrokerageGetComponent } from './brokerage-get/brokerage-get.component';
import { BrokerageEditComponent } from './brokerage-edit/brokerage-edit.component';
import { MySharesAddComponent } from './my-shares-add/my-shares-add.component';
import { MySharesGetComponent } from './my-shares-get/my-shares-get.component';
import { MySharesEditComponent } from './my-shares-edit/my-shares-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BrokerageAddComponent,
    BrokerageGetComponent,
    BrokerageEditComponent,
    MySharesAddComponent,
    MySharesGetComponent,
    MySharesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

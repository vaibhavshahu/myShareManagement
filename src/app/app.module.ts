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
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import {CalendarModule} from 'primeng/calendar';

import { HttpClientModule } from '@angular/common/http';
import { BrokerageService } from './brokerage.service';


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
    AppRoutingModule,
    SlimLoadingBarModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BrokerageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

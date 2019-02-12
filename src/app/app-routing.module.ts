import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrokerageGetComponent } from './brokerage-get/brokerage-get.component';
import { MySharesEditComponent } from './my-shares-edit/my-shares-edit.component';
import { MySharesAddComponent } from './my-shares-add/my-shares-add.component';
import { MySharesGetComponent } from './my-shares-get/my-shares-get.component';

const routes: Routes = [
  {
    path: 'myShare/add',
    component: MySharesAddComponent
  },
  {
    path: 'myShare/edit/:id',
    component: MySharesEditComponent
  },
  {
    path: 'myShares',
    component: MySharesGetComponent
  },
  {
    path: 'brokerage',
    component: BrokerageGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

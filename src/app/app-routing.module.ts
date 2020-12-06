import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes,RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PendingTicketsComponent } from './pending-tickets/pending-tickets.component';
import { ClosedTicketsComponent } from './closed-tickets/closed-tickets.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pending-tickets', component:PendingTicketsComponent},
  {path: 'closed-tickets', component:ClosedTicketsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

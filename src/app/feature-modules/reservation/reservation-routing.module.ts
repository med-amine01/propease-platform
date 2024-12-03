import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { MakeReservationComponent } from './components/make-reservation/make-reservation.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationListComponent,
  },
  {
    path: 'make-reservation',
    component: MakeReservationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationRoutingModule {}

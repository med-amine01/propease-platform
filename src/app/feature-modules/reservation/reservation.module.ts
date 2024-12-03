import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservationService } from './service/reservation.service';
import { ReservationFiltersComponent } from './components/reservation-filters/reservation-filters.component';
import { MakeReservationComponent } from './components/make-reservation/make-reservation.component';

@NgModule({
  declarations: [ReservationListComponent, ReservationFiltersComponent, MakeReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
    CdkVirtualScrollViewport,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [ReservationService],
})
export class ReservationModule {}

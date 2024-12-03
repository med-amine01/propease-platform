import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReservationSearchFilter } from '../../models/request/reservation-search-filter';
import { ReservationSummary } from '../../models/response/reservation-summary';
import { BehaviorSubject } from 'rxjs';
import { ReservationService } from '../../service/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationListComponent {
  reservationSummary$ = new BehaviorSubject<ReservationSummary | null>(null);
  isLoading$ = new BehaviorSubject<boolean>(false);
  isError$ = new BehaviorSubject<boolean>(false);

  constructor(private reservationService: ReservationService) {}

  fetchReservations(filters: ReservationSearchFilter): void {
    this.isLoading$.next(true);
    this.isError$.next(false);

    this.reservationService.fetchReservationsList(filters).subscribe({
      next: summary => {
        this.reservationSummary$.next(summary);
        this.isLoading$.next(false);
      },
      error: () => {
        this.isError$.next(true);
        this.isLoading$.next(false);
      },
    });
  }

  clearFilters(): void {
    this.reservationSummary$.next(null);
  }
}

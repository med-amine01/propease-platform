import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ReservationSearchFilter } from '../models/request/reservation-search-filter';
import { Observable } from 'rxjs';
import { ReservationSummary } from '../models/response/reservation-summary';
import { ReservationModule } from '../reservation.module';
import { ReservationRequest } from '../models/request/reservation-request';

@Injectable({
  providedIn: ReservationModule,
})
export class ReservationService {
  private readonly apiUrl = `${environment.BASE_BACKEND_URL}/api/reservations`;

  constructor(private http: HttpClient) {}

  fetchReservationsList(filter: ReservationSearchFilter | null = null): Observable<ReservationSummary> {
    let param = `${this.apiUrl}/search`;
    param += filter?.propertyType ? `?propertyType=${filter?.propertyType}` : '';

    return this.http.post<ReservationSummary>(param, filter);
  }

  createReservation(reservation: ReservationRequest): Observable<void> {
    return this.http.post<void>(this.apiUrl, reservation);
  }
}

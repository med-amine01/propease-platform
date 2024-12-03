import { Reservation } from './reservation';

export interface ReservationSummary {
  reservations: Reservation[];
  totalMoneySpentOnFlats: number;
  totalMoneySpentOnHotelRooms: number;
  totalMoneySpent: number;
  mostVisitedCity: string;
}

import { PropertyType } from '../../../../shared/enum/property-type';

export class ReservationSearchFilter {
  userId!: number | null;
  propertyType!: PropertyType | null;
  buildingName!: string | null;
  city!: string | null;
  address!: string | null;
  country!: string | null;
  minPrice!: number | null;
  maxPrice!: number | null;
  startDate!: string | null;
  endDate!: string | null;
}

import { PropertyType } from '../../../../shared/enum/property-type';

export interface Reservation {
  buildingName: string;
  propertyType: PropertyType;
  city: string;
  country: string;
  address: string;
  moneySpent: number;
  startDate: Date;
  endDate: Date;
}

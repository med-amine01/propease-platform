import { PropertyType } from '../../../shared/enum/property-type';
import { AvailabilityStatus } from '../../../shared/enum/availability-status';

export interface Property {
  id: number;
  buildingName: string;
  propertyType: PropertyType;
  city: string;
  country: string;
  address: string;
  price: number;
  availability: AvailabilityStatus;
}

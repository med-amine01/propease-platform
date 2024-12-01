export interface Property {
  name: string;
  propertyType: PropertyType;
  city: string;
  country: string;
  address: string;
  price: number;
  availability: AvailabilityStatus;
}

export enum PropertyType {
  HOTEL_ROOM = 'HOTEL_ROOM',
  FLAT = 'FLAT',
}

export enum AvailabilityStatus {
  BOOKED = 'BOOKED',
  AVAILABLE = 'AVAILABLE',
}

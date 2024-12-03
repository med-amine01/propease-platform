import { Pipe, PipeTransform } from '@angular/core';
import { PropertyType } from '../enum/property-type';

@Pipe({
  name: 'propertyType',
})
export class PropertyTypePipe implements PipeTransform {
  transform(type: PropertyType | string): string {
    if (type === PropertyType.HOTEL_ROOM) {
      return 'Hotel Room';
    } else if (type === PropertyType.FLAT) {
      return 'Flat';
    }
    return 'Unknown';
  }
}

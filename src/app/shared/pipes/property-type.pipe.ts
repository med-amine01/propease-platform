import { Pipe, PipeTransform } from '@angular/core';
import { PropertyType } from '../../feature-modules/property-list/models/property.model';

@Pipe({
  name: 'propertyType',
})
export class PropertyTypePipe implements PipeTransform {
  transform(type: PropertyType): string {
    const map = {
      [PropertyType.HOTEL_ROOM]: 'Hotel Room',
      [PropertyType.FLAT]: 'Flat',
    };
    return map[type] || 'Unknown';
  }
}

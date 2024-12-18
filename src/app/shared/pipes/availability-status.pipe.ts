import { Pipe, PipeTransform } from '@angular/core';
import { AvailabilityStatus } from '../enum/availability-status';

@Pipe({
  name: 'availabilityStatus',
})
export class AvailabilityStatusPipe implements PipeTransform {
  transform(status: AvailabilityStatus): string {
    const map = {
      [AvailabilityStatus.AVAILABLE]: 'Available',
      [AvailabilityStatus.BOOKED]: 'Booked',
    };
    return map[status] || 'Unknown';
  }
}

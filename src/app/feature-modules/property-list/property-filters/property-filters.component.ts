import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PropertyRequest } from '../models/property-request';

@Component({
  selector: 'app-property-filters',
  templateUrl: './property-filters.component.html',
  styleUrls: ['./property-filters.component.css'],
})
export class PropertyFiltersComponent {
  @Input() filters: PropertyRequest = {
    buildingName: null,
    city: null,
    address: null,
    country: null,
    minPrice: null,
    maxPrice: null,
    availability: null,
  };

  @Output() filtersChanged = new EventEmitter<PropertyRequest>();

  onFilter(): void {
    this.filtersChanged.emit(this.filters);
  }

  onClear(): void {
    this.filters = {
      buildingName: null,
      city: null,
      address: null,
      country: null,
      minPrice: null,
      maxPrice: null,
      availability: null,
    };
    this.filtersChanged.emit(this.filters);
  }
}

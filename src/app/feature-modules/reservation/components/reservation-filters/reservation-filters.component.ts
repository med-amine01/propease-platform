import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyType } from '../../../../shared/enum/property-type';
import { ReservationSearchFilter } from '../../models/request/reservation-search-filter';

@Component({
  selector: 'app-reservation-filters',
  templateUrl: './reservation-filters.component.html',
  styleUrls: ['./reservation-filters.component.css'],
})
export class ReservationFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<ReservationSearchFilter>();
  @Output() clearFiltersEvent = new EventEmitter<void>();

  filtersForm!: FormGroup;
  protected readonly PropertyType = PropertyType;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.filtersForm = this.fb.group({
      userId: [null],
      propertyType: [null],
      buildingName: [null],
      city: [null],
      address: [null],
      country: [null],
      minPrice: [null],
      maxPrice: [null],
      startDate: [null],
      endDate: [null],
    });
  }

  applyFilters(): void {
    this.filtersChanged.emit(this.filtersForm.value);
  }

  clearFilters(): void {
    this.filtersForm.reset();
    this.clearFiltersEvent.emit();
  }
}

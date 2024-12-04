import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyType } from '../../../../shared/enum/property-type';
import { ReservationSearchFilter } from '../../models/request/reservation-search-filter';

@Component({
  selector: 'app-reservation-filters',
  templateUrl: './reservation-filters.component.html',
  styleUrls: ['./reservation-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFiltersComponent implements OnInit {
  @Output() filtersChanged = new EventEmitter<ReservationSearchFilter>();
  @Output() clearFiltersEvent = new EventEmitter<void>();

  filtersForm!: FormGroup;
  protected readonly PropertyType = PropertyType;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();

    this.filtersForm.get('search')?.valueChanges.subscribe((searchValue: string) => {
      this.updateSearchFields(searchValue);
    });
  }

  private initializeForm(): void {
    this.filtersForm = this.fb.group({
      search: [''],
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

  private updateSearchFields(searchValue: string): void {
    const normalizedValue = searchValue?.trim() || null;
    this.filtersForm.patchValue(
      {
        buildingName: normalizedValue,
        city: normalizedValue,
        address: normalizedValue,
      },
      { emitEvent: false },
    );
  }

  applyFilters(): void {
    const { search, ...filtersWithoutSearch } = this.filtersForm.value;
    this.filtersChanged.emit(filtersWithoutSearch);
  }

  clearFilters(): void {
    this.filtersForm.reset();
    this.filtersChanged.emit(this.filtersForm.value);
  }
}

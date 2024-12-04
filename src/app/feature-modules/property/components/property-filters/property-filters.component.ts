import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyRequest } from '../../models/property-request';

@Component({
  selector: 'app-property-filters',
  templateUrl: './property-filters.component.html',
  styleUrls: ['./property-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyFiltersComponent implements OnInit {
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

  filtersForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      search: [''],
      buildingName: [this.filters.buildingName || null],
      city: [this.filters.city || null],
      address: [this.filters.address || null],
      country: [this.filters.country || null],
      minPrice: [this.filters.minPrice || null],
      maxPrice: [this.filters.maxPrice || null],
      availability: [this.filters.availability],
    });
  }

  ngOnInit(): void {
    // Synchronize buildingName, city, and address with search input
    this.filtersForm.get('search')?.valueChanges.subscribe((searchValue: string) => {
      this.filtersForm.patchValue(
        {
          buildingName: searchValue || null,
          city: searchValue || null,
          address: searchValue || null,
        },
        { emitEvent: false },
      );
    });
  }

  onFilter(): void {
    if (this.filtersForm.valid) {
      const { search, ...filtersWithoutSearch } = this.filtersForm.value;
      this.filtersChanged.emit(filtersWithoutSearch);
    }
  }

  onClear(): void {
    this.filtersForm.reset();
    this.filtersChanged.emit(this.filtersForm.value);
  }
}

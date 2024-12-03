import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../service/property.service';
import { PropertyRequest } from '../../models/property-request';
import { Page } from '../../../../shared/models/page.interface';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  pageData: Page<Property> | undefined;
  filters: PropertyRequest = {
    buildingName: null,
    city: null,
    address: null,
    country: null,
    minPrice: null,
    maxPrice: null,
    availability: null,
  };
  currentPage: number = 0;
  pageSize: number = 5;
  isLoading: boolean = false;
  isError: boolean = false;

  constructor(private propertyService: PropertyService) {}

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.isLoading = true;
    this.isError = false;
    this.propertyService.fetchPropertiesList(this.filters, this.currentPage, this.pageSize).subscribe(
      data => {
        this.pageData = data;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      },
    );
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadProperties();
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 0;
    this.loadProperties();
  }

  applyFilters(filters: PropertyRequest): void {
    this.filters = filters;
    this.currentPage = 0;
    this.loadProperties();
  }
}

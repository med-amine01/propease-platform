import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { PropertyService } from './service/property.service';
import { CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AvailabilityStatusPipe } from '../../shared/pipes/availability-status.pipe';
import { PropertyFiltersComponent } from './components/property-filters/property-filters.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PropertyListComponent, AvailabilityStatusPipe, PropertyFiltersComponent],
  imports: [
    CommonModule,
    FormsModule,
    PropertyRoutingModule,
    CdkVirtualScrollViewport,
    CdkVirtualForOf,
    CdkFixedSizeVirtualScroll,
    SharedModule,
  ],
  providers: [PropertyService],
})
export class PropertyModule {}

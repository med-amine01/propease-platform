import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { PropertyTypePipe } from './pipes/property-type.pipe';

@NgModule({
  declarations: [PaginationComponent, PropertyTypePipe],
  imports: [CommonModule, FormsModule],
  exports: [PaginationComponent, PropertyTypePipe],
})
export class SharedModule {}

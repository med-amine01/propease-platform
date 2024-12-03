import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { PropertyRequest } from '../models/property-request';
import { Page } from '../../../shared/models/page.interface';
import { Property } from '../models/property';
import { PropertyModule } from '../property.module';

@Injectable({
  providedIn: PropertyModule,
})
export class PropertyService {
  private readonly apiUrl = `${environment.BASE_BACKEND_URL}/api/properties`;

  constructor(private http: HttpClient) {}

  fetchPropertiesList(
    request: PropertyRequest | null = null,
    page: number = 0,
    size: number = 5,
  ): Observable<Page<Property>> {
    const params = `?page=${page}&size=${size}`;
    return this.http.post<Page<Property>>(`${this.apiUrl}${params}`, request);
  }
}

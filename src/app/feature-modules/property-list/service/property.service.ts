import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';
import { PropertyRequest } from '../models/property-request';
import { Page } from '../../../shared/models/page.interface'; // Assuming the Page interface is defined here

@Injectable()
export class PropertyService {
  private apiUrl = `${environment.BASE_BACKEND_URL}/api/properties`;

  constructor(private http: HttpClient) {}

  listProperties(request: PropertyRequest | null = null, page: number = 0, size: number = 5): Observable<Page<Property>> {
    const params = `?page=${page}&size=${size}`;
    return this.http.post<Page<Property>>(`${this.apiUrl}${params}`, request);
  }
}

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, { response: HttpResponse<any>; expiry: number }>();
  private ttl = 300000; // 5 minutes

  get(req: HttpRequest<any>): HttpResponse<any> | undefined {
    const cached = this.cache.get(req.urlWithParams);
    if (!cached) {
      return undefined;
    }
    const isExpired = cached.expiry < Date.now();
    if (isExpired) {
      this.cache.delete(req.urlWithParams);
      return undefined;
    }
    return cached.response;
  }

  put(req: HttpRequest<any>, response: HttpResponse<any>): void {
    const expiry = Date.now() + this.ttl;
    this.cache.set(req.urlWithParams, { response, expiry });
  }

  clear(): void {
    this.cache.clear();
  }
}

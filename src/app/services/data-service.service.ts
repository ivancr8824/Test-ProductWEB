import { Injectable, inject } from '@angular/core';
import { environments } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = environments.baseUrl;
  private http = inject( HttpClient );

  public get<T>(pathUrl: string): Observable<T>{
    return this.http.get<T>(`${this.baseUrl}${pathUrl}`);
  }

  public post<T>(pathUrl: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${pathUrl}`, body);
  }

  public put<T>(pathUrl: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${pathUrl}`, body);
  }

  public delete<T>(pathUrl: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${pathUrl}`);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = "https://restcountries.eu/rest/v2";

  getParams() {
    return new HttpParams().set('fields', 'name;flag;alpha2Code;population');
  }

  constructor(private http:HttpClient) { }

  getPais(termino:string):Observable<Countries[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Countries[]>(url, {params: this.getParams()});

  }

  getCapital(termino:string):Observable<Countries[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Countries[]>(url, {params: this.getParams()});
  }

  getPaisCode(id:string):Observable<Countries> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Countries>(url);
  }

  getRegion(region:string):Observable<Countries[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Countries[]>(url, {params: this.getParams()});
  }
}

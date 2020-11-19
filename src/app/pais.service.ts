import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  public country: JSON;

  constructor(private http: HttpClient) { }

  obtenerPais(code3: string) {
    this.http.get('https://restcountries.eu/rest/v2/alpha/' + code3).subscribe((result: JSON) => {
      this.country = result;
      console.log(this.country);
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegionalBlocs } from './shared/regionalBlocs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  public selCountries: Array<any>;

  constructor(private http: HttpClient) { }

  obtenerPaises() {
    return new Promise((res, rej) => {
      this.http.get('https://restcountries.eu/rest/v2/all').subscribe((result: Array<any>) => {
        this.selCountries = result;
        res(true);
      });
    });
  }

  obtenerSelPaises(region: string) {
    return new Promise((res, rej) => {
      this.http.get('https://restcountries.eu/rest/v2/region/' + region).subscribe((result: Array<any>) => {
        this.selCountries = result;
        res(true);
      });
    });
  }

  filtrarSelPaises(subRegion: string) {
    const newSelCountries = this.selCountries.filter(pais =>
      pais.subregion === subRegion
    );
    this.selCountries = newSelCountries;
  }

  obtenerSelPaisesRB(regionalBloc: RegionalBlocs) {
    if (regionalBloc.name === 'Todos') {
      this.obtenerPaises();
    } else {
      return new Promise((res, rej) => {
        this.http.get('https://restcountries.eu/rest/v2/regionalbloc/' + regionalBloc.acronym).subscribe((result: Array<any>) => {
          this.selCountries = result;
          res(true);
        });
      });
    }
  }
}

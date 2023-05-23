import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, combineLatest, count, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl: string = "https://restcountries.com/v3.1";

  private _regions: Region[] = [Region.Africa, Region.Asia, Region.Americas, Region.Europe, Region.Oceania]

  constructor(private httpClient: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if(!region) {
      return of([]);
    }

    return this.httpClient.get<Country[]>(`${this.baseUrl}/region/${region}?fields=cca3,name,borders`)
    .pipe(
      map(countries => countries.map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })))
    );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    return this.httpClient.get<Country>(`${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`)
    .pipe(
      map(country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }))
    )
  }

  getCountryBordersByCodes(borders: string[]): Observable<SmallCountry[]> {
    if(!borders || borders.length === 0) {
      return of([]);
    }

    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach(code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    return combineLatest(countriesRequests)
  }
  
}

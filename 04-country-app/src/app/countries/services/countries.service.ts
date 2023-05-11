import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private httpClient: HttpClient) { 
    this.loadFromLocalStorage()
  }

  cacheStore: CacheStore = {
    byCapital: { term: '', countries: [] },
    byCountries: { term: '', countries: [] },
    byRegion: { region: '', countries: [] }
  }

  private saveToLocalStorage() {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if(!localStorage.getItem('cacheStore')) {
      return
    }

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  } 

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])))
  }

  private endpoint: string = "https://restcountries.com/v3.1";

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.httpClient.get<Country[]>(`${this.endpoint}/alpha/${code}`)
      .pipe(
        map(countries => countries.length > 0 ? countries[0] : null),
        catchError(() => of(null))
      );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.endpoint}/capital/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries } ),
      tap( () => this.saveToLocalStorage() )
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.endpoint}/name/${term}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term, countries } ),
      tap( () => this.saveToLocalStorage() )
    );
  }

  searchRegion(region: Region): Observable<Country[]> {
    const url = `${this.endpoint}/region/${region}`;
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries } ),
      tap( () => this.saveToLocalStorage() )
    );
  }

}

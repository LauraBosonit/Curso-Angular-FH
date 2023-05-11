import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  countries: Country[] = [];
  initialValue: string = "";

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  
  
  
  searchByCountry(term: string) {
    this.countriesService.searchCountry(term).subscribe(response => {
      this.countries = response;
    })
  }

}

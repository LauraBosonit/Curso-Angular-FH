import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  constructor(private countriesService: CountriesService) {}

  countries: Country[] = [];
  isLoading: boolean = false;
  initialValue: string = '';

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }
  
  
  searchByCapital(term: string) {
    this.isLoading = true;

    this.countriesService.searchCapital(term).subscribe(response => {
      this.countries = response;
      this.isLoading = false;
    })
  }
}

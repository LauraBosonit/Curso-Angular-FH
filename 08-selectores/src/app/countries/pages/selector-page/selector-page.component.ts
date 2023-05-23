import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { count, filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  public reactiveForm: FormGroup = this.formBuilder.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  public countriesByRegion: SmallCountry[] = [];
  public borders: SmallCountry[] = [];

  constructor(private formBuilder: FormBuilder, private countriesService: CountriesService) {}
  
  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChange(): void {
    this.reactiveForm.get('region')!.valueChanges
    .pipe(
      tap(() => this.reactiveForm.get('country')?.setValue('')),
      tap(() => this.borders = []),
      switchMap(region => this.countriesService.getCountriesByRegion(region))
    )
    .subscribe(countries => {
      this.countriesByRegion = countries;
    });     
  }

  onCountryChange(): void {
    this.reactiveForm.get('country')!.valueChanges
    .pipe(
      tap(() => this.reactiveForm.get('border')?.setValue('')),
      filter( (value: string) => value.length > 0 ),
      switchMap(alphaCode => this.countriesService.getCountryByAlphaCode(alphaCode)),
      switchMap(country => this.countriesService.getCountryBordersByCodes(country.borders))
    )
    .subscribe(countries => {
      this.borders = countries;
    });    
  }
}

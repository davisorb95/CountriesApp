import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CountryComponent {
  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestionCountries: Country[] = [];
  showSuggestion: boolean = false;

  constructor(
    private countryService: CountryService
  ) { }

  search( term: string ): void {
    this.term = term;
    this.error = false;
    this.showSuggestion = false;

    this.countryService.searchCountryByName( this.term )
      .subscribe(
        ( countries: Country[] ) => this.countries = countries
        , ( err ) => {
          this.error = true;
          this.countries = [];
        }
      );
  }

  suggestions( term: string ): void {
    this.term = term;
    this.error = false;
    this.showSuggestion = true;

    this.countryService.searchCountryByName( this.term )
      .subscribe(
        ( countries: Country[] ) => this.suggestionCountries = countries.splice( 0, 5 ),
        ( err ) => this.suggestionCountries = []
      )
  }
}

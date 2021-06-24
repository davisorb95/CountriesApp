import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class CapitalComponent {
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

    this.countryService.searchCountryByCapital( this.term )
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

    this.countryService.searchCountryByCapital( this.term )
      .subscribe(
        ( countries: Country[] ) => this.suggestionCountries = countries.splice( 0, 5 ),
        ( err ) => this.suggestionCountries = []
      );
  }

}

import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
  ]
})
export class RegionComponent {
  regions: string[] = ['africa', 'americas', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = [];

  constructor(
    private countryService: CountryService
  ) { }

  getCssClass( region: string ): string {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion( region: string ): void {
    if ( region === this.activeRegion ) { return; }

    this.activeRegion = region;
    this.countries = [];
    this.countryService.searchCountryByRegion( this.activeRegion )
      .pipe(tap( console.log ))
      .subscribe(
        ( countries: Country[] ) => this.countries = countries,
        () => this.countries = []
      );
  }

}

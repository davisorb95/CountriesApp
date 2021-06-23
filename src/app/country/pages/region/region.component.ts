import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

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

  constructor() { }

  getCssClass( region: string ): string {
    return region === this.activeRegion ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activateRegion( region: string ): void {
    if ( region === this.activeRegion ) { return; }

    this.activeRegion = region;

    // ...
  }

}

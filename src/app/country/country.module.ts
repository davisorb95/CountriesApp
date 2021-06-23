import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CapitalComponent } from './pages/capital/capital.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ViewCountryComponent,
    CountryInputComponent,
    CountryTableComponent
  ],
  exports: [
    CapitalComponent,
    CountryComponent,
    RegionComponent,
    ViewCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }

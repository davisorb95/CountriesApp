import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from '../interfaces/country.interface';


@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private apiUrl: string = 'https://restcountries.eu/rest/v2';

    get params(): HttpParams {
        return new HttpParams()
            .set( 'fields', 'name;capital;alpha2Code;flag;population' );
    }

    constructor(
        private http: HttpClient
    ) { }

    searchCountryByName( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/name/${ term }`;

        return this.http.get<Country[]>( url, { params: this.params } );
    }

    searchCountryByRegion( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/region/${ term }`;

        return this.http.get<Country[]>( url, { params: this.params } );
    }

    searchCountryByCapital( term: string ): Observable<Country[]> {
        const url = `${ this.apiUrl }/capital/${ term }`;

        return this.http.get<Country[]>( url, { params: this.params } );
    }

    getCountryByAlphaCode( alphaCode: string ): Observable<Country> {
        const url = `${ this.apiUrl }/alpha/${ alphaCode }`;

        return this.http.get<Country>( url );
    }

}
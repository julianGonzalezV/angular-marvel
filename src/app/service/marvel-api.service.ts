import { Injectable } from '@angular/core';
import { MarvelApiRespose } from '../MarvelTypes';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fakeMarvelData$ } from '../fake-data';
import { MARVEL_API_KEY, MARVEL_HASH } from './service-constants';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  marvelUrl = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=ir';
  apiKey = MARVEL_API_KEY;
  hash = MARVEL_HASH
  constructor(private http: HttpClient) { }


  getCharacters(): Observable<MarvelApiRespose> {
    return this.http.get<MarvelApiRespose>( `${this.marvelUrl}&ts=1&apikey=${this.apiKey}&hash=${this.hash}`);
  }

  
}

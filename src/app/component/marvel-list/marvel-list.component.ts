import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiRespose, MarvelCharacter } from '../../MarvelTypes';
import { MarvelApiService } from '../../service/marvel-api.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-marvel-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './marvel-list.component.html',
  styleUrl: './marvel-list.component.css'
})
export class MarvelListComponent implements OnInit{
  
  marvelResponse$!: Observable<MarvelApiRespose>;

  constructor(private marvelService: MarvelApiService){}

  ngOnInit(): void {
    this.marvelResponse$ = this.marvelService.getCharacters();
  }

}

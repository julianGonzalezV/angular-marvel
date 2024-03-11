import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvelListComponent } from '../marvel-list/marvel-list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, MarvelListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}

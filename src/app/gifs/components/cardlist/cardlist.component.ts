import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './cardlist.component.html'  
})
export class CardlistComponent {

  @Input()
  gifs : Gif[] = [];

}

import { Component, Input,OnInit  } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.css']
})
export class GifCardComponent implements OnInit{
  
  @Input()
  public gif!:Gif;
  
  
  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gifs is required')
  }


}

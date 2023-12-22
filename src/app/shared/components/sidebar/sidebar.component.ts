import { Component } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public gifs : string[] = [];
  
  constructor( private gifsService: GifsService ){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  search(tag: string):void{
    this.gifsService.searchTag( tag );
  }

}

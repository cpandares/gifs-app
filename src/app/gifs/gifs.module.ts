import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardlistComponent,
    GifCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    SearchboxComponent,
    GifCardComponent
  ]
})
export class GifsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchboxComponent } from './components/searchbox/searchbox.component';
import { CardlistComponent } from './components/cardlist/cardlist.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchboxComponent,
    CardlistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    SearchboxComponent
  ]
})
export class GifsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

@NgModule({
    declarations: [
      RentalListComponent,
      RentalListItemComponent,
      RentalComponent
    ],
    imports: [
        BrowserModule, 
    ],
    providers: []
  })
  export class RentalModule { }
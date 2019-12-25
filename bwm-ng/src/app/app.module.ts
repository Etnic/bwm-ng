import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';
import { Routes, RouterModule } from '@angular/router';
import { RentalModule } from './rental/rental.module';

const routes:Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},
  {path: 'temp', component: TempComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

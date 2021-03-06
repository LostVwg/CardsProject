import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import {CardsService} from './cards/cards.service';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

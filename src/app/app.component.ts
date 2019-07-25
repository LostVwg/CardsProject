import {Component, OnInit} from '@angular/core';
import { CardsService } from './cards/cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataArray = [];
  cardInfo = [];

  clickOuterButton(event) {
    this.cardInfo.push(this.dataArray.pop());
    console.log(this.cardInfo);
  }

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.dataArray = this.cardsService.getData();
    this.cardInfo.push(this.dataArray.pop());
    console.log(this.cardInfo);
    }
}

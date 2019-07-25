import { Injectable } from '@angular/core';
import sampleData from 'src/assets/data/cardsData.json';


@Injectable()

export class CardsService {

  cardInfo = sampleData;

  constructor() {}

  getData() {
    return this.cardInfo;
  }
}

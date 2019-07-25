import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: []
})
export class CardsComponent implements OnInit {
  @Input() info;

  InnerButton = 'InnerButton1';
  ButtonText = 'Добавить в избранное';

  clicked(event) {
    this.InnerButton = 'InnerButton2';
    this.ButtonText = 'В избранном';
  }

  constructor() {}

  ngOnInit() {}

}

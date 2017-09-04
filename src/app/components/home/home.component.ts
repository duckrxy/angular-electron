import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works`;

  titleName = 'HaHa';
  links = [
    "https://images-cn.ssl-images-amazon.com/images/I/61XFveoztLL._UL1500_.jpg",
    "https://images-cn.ssl-images-amazon.com/images/I/61gXO41ybtL._UL1500_.jpg"
  ];

  tttt :TestItem;

  constructor() { }

  ngOnInit() {
    this.tttt  = new TestItem();
    this.tttt.age = 23;
    this.tttt.name = "ddd";
  }
  showInfo(link){

  }

}

export class TestItem{
  name:string;
  age:number;
}
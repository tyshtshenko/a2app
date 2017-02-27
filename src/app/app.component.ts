import { Component } from '@angular/core';
import {Hero} from './app.hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myHero: Hero;
  heroes: Hero[];
  constructor(){
    this.title = 'My First Angular App!';
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];
    this.myHero = this.heroes[0];
  }

  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(new Hero(0, newHero));
    }
  }

}

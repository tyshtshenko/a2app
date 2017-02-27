import { Component } from '@angular/core';

@Component({
  selector: 'click-me',
  templateUrl: './click-me.component.html',
  styleUrls: ['./click-me.component.css']
})
export class ClickMeComponent {

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}

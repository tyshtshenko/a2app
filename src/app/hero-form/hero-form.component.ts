/**
 * Created by gen on 2/28/2017.
 */
import { Component } from '@angular/core';

import { Hero }    from './hero';

@Component({
  selector: 'hero-form',
  styles: [`
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}
.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
`],
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }

  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }
}

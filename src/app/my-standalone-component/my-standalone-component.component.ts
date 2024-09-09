import { Component,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import '@material/web/button/elevated-button';
import '@material/web/button/filled-button';
import '@material/web/button/outlined-button';
import '@material/web/button/text-button';
import '@material/web/button/filled-tonal-button';
@Component({
  selector: 'app-my-standalone-component',
  standalone: true,
  imports: [],
  templateUrl: './my-standalone-component.component.html',
  styleUrl: './my-standalone-component.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Enable custom elements schema
})
export class MyStandaloneComponentComponent {
  onSubmit() {
    console.log('Submit button clicked!');
  }
}

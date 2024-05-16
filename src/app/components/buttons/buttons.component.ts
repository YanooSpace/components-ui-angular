import { Component } from '@angular/core';
import { Button01Component } from './button01/button01.component';
import { Button02Component } from './button02/button02.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    Button01Component,
    Button02Component
  ],
  templateUrl: './buttons.component.html',
  styles: ``
})
export class ButtonsComponent {

  buttonList:string[] = ['buttonA'] 

}

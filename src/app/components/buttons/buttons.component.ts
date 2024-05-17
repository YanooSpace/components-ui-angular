import { Component } from '@angular/core';
import { Button01Component } from './button01/button01.component';
import { Button02Component } from './button02/button02.component';
import { Button03Component } from './button03/button03.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    Button01Component,
    Button02Component,
    Button03Component
  ],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {

  buttonList:string[] = ['buttonA', 'buttonB','buttonC'] 

}

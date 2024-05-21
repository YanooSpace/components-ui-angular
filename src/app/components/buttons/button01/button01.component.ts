import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button01',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button01.component.html',
  styles: ``
})
export class Button01Component {

  isVisible: boolean = false;

  toggleButton(){
    this.isVisible = !this.isVisible
  }

}

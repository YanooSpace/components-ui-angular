import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveBtnComponent } from '../remove-btn/remove-btn.component';

@Component({
  selector: 'app-button01',
  standalone: true,
  imports: [
    CommonModule,
    RemoveBtnComponent,
  ],
  templateUrl: './button01.component.html',
})
export class Button01Component {

  isVisible: boolean = false;

  toggleButton(){
    this.isVisible = !this.isVisible
  }

}

import { Component, Input } from '@angular/core';
import { RemoveBtnComponent } from '../buttons/remove-btn/remove-btn.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    RemoveBtnComponent
  ],
  templateUrl: './modal.component.html',
})
export class ModalComponent {

  @Input() isVisible: boolean = false;
 
  toggleButton() {
    this.isVisible = !this.isVisible
  }
}

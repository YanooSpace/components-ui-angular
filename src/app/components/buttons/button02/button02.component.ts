import { Component } from '@angular/core';
import { RemoveBtnComponent } from '../remove-btn/remove-btn.component';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-button02',
  standalone: true,
  imports: [
    RemoveBtnComponent,
    ModalComponent
  ],
  templateUrl: './button02.component.html',
  styles: ``
})
export class Button02Component {

  isVisible: boolean = false;
  isLoading: boolean = false;

  onLoading() {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.isVisible = !this.isLoading
    }, 2000);
  }

}

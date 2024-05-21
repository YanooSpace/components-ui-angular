import { Component } from '@angular/core';
import { RemoveBtnComponent } from '../remove-btn/remove-btn.component';

@Component({
  selector: 'app-button02',
  standalone: true,
  imports: [RemoveBtnComponent],
  templateUrl: './button02.component.html',
  styles: ``
})
export class Button02Component {

  isLoading: boolean = false;
  isVisible: boolean = false;

  onLoading() {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = !this.isLoading;
      this.isVisible = !this.isLoading
    }, 2000);
  }

  toggleButton() {
    this.isVisible = !this.isVisible
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-button02',
  standalone: true,
  imports: [],
  templateUrl: './button02.component.html',
  styles: ``
})
export class Button02Component {

  isLoading: boolean = false;
  isVisible: boolean = false;

  modal: string = 'flex flex-col gap-3 px-[2rem] py-[1rem] justify-center items-center border-slate-100 border-[1px] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[1rem]'

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

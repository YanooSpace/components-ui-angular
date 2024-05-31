import { Component, input } from '@angular/core';
import { BackBtnComponent } from '../buttons/back-btn/back-btn.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    BackBtnComponent
  ],
  templateUrl: './layout.component.html',

})
export class LayoutComponent {

  /**
   * 시그널로
   * @Input() items: string[]  = [];
   */
  items = input<string[]>();

  title = input<string>();
}

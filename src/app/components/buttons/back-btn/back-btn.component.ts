import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'back-btn',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './back-btn.component.html',
})
export class BackBtnComponent {

}

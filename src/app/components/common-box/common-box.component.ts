import { Component, Input } from '@angular/core';

@Component({
  selector: 'common-box',
  standalone: true,
  imports: [],
  templateUrl: './common-box.component.html',
  styleUrl: './common-box.component.scss'
})
export class CommonBoxComponent {
  @Input()
  title: string = ''
}

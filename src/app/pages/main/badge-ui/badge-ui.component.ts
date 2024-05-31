import { Component } from '@angular/core';
import { LayoutComponent } from '../../../components/layout/layout.component';
import { Badge01Component } from '../../../components/badges/badge01/badge01.component';

@Component({
  selector: 'app-badge-ui',
  standalone: true,
  imports: [
    Badge01Component,
    LayoutComponent
  ],
  templateUrl: './badge-ui.component.html',
})
export class BadgeUiComponent {

  itemList: string[] = ['badge01']


}

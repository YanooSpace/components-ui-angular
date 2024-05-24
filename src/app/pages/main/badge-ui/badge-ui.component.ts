import { Component } from '@angular/core';
import { AsideComponent } from '../../../components/aside/aside.component';
import { BackBtnComponent } from '../../../components/buttons/back-btn/back-btn.component';
import { CommonBoxComponent } from '../../../components/common-box/common-box.component';
import { Badge01Component } from '../../../components/badges/badge01/badge01.component';

@Component({
  selector: 'app-badge-ui',
  standalone: true,
  imports: [
    CommonBoxComponent,
    AsideComponent,
    BackBtnComponent,
    Badge01Component
  ],
  templateUrl: './badge-ui.component.html',
  styles: `
  .badge {
    background: red;
  }

  `
})
export class BadgeUiComponent {

  itemList: string[] = ['badge01']


}

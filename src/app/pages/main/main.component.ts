import { Component } from '@angular/core';
import { RouterLink  } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

import { CType } from '../../interface/component-type.interface';
import { MOCK_CMT } from '../../data/MOCK_CMT';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
  ],
  templateUrl: './main.component.html',
  styles: `

  .component-box {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    background: lightgray;
    padding: 1.5rem;
    border-radius: 1rem;
  }
  `
})
export class MainComponent {
  /**
   * 삽입될 컴포넌트 리스트 목데이터 할당
   * @CType 컴포넌트 타입의 인터페이스 정의
   * @MOCK_CMT 컴포넌트 리스트 목데이터
   */
  componentList: CType[] = MOCK_CMT 
}

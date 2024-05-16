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
    HeaderComponent
  ],
  templateUrl: './main.component.html',
  styles: `
  `
})
export class MainComponent {
  
  componentBox = 'flex flex-col gap-[0.5rem] items-center bg-slate-100 p-[1.5rem] rounded-[1rem]'
  /**
   * 삽입될 컴포넌트 리스트 목데이터 할당
   * @CType 컴포넌트 타입의 인터페이스 정의
   * @MOCK_CMT 컴포넌트 리스트 목데이터
   */
  componentList: CType[] = MOCK_CMT 
}

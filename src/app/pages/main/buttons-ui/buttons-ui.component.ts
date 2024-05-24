import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonBoxComponent } from '../../../components/common-box/common-box.component';
import { AsideComponent } from '../../../components/aside/aside.component';
import { Button01Component } from '../../../components/buttons/button01/button01.component';
import { Button02Component } from '../../../components/buttons/button02/button02.component';
import { Button03Component } from '../../../components/buttons/button03/button03.component';
import { BackBtnComponent } from '../../../components/buttons/back-btn/back-btn.component';

@Component({
  selector: 'app-buttons-ui',
  standalone: true,
  imports: [
    CommonBoxComponent,
    AsideComponent,
    BackBtnComponent,
    Button01Component,
    Button02Component,
    Button03Component
  ],
  templateUrl: './buttons-ui.component.html',
})
export class ButtonsUiComponent {
  itemList: string[] = ['Modal button', 'Loading button','Upload button']

  constructor(private baseURL: HttpClient) {}

  // fileUploaded 이벤트를 처리하는 메서드
  handleFileUpload(file: File) {
    // const formData = new FormData();
    // formData.append('file', file, file.name);

    // this.baseURL.post('http://localhost:3000/uploads', formData).subscribe({
    //   next: (response) => console.log('업로드 성공', response),
    //   error: (error) => console.log('업로드 실패', error)
    //   });
  }

  

}

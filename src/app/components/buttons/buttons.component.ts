import { Component } from '@angular/core';
import { Button01Component } from './button01/button01.component';
import { Button02Component } from './button02/button02.component';
import { Button03Component } from './button03/button03.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [
    Button01Component,
    Button02Component,
    Button03Component
  ],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {

  buttonList: string[] = ['buttonA', 'buttonB','buttonC']

  constructor(private baseURL: HttpClient) {}

  // fileUploaded 이벤트를 처리하는 메서드s
  handleFileUpload(file: File) {
    // const formData = new FormData();
    // formData.append('file', file, file.name);

    // this.baseURL.post('http://localhost:3000/uploads', formData).subscribe({
    //   next: (response) => console.log('업로드 성공', response),
    //   error: (error) => console.log('업로드 실패', error)
    //   });
  }

}

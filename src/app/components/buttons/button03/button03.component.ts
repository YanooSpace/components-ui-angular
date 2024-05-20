import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild, signal } from '@angular/core';

@Component({
  selector: 'app-button03',
  standalone: true,
  imports: [],
  templateUrl: './button03.component.html',
  styles: `
  .file-upload-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%)
  }

  pre {
    background-color: white;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 20px;
    white-space: pre-wrap; /* Enable line breaks */
  }
  
  `
})
export class Button03Component {

  // 템플릿 내에서 fileInput 요소를 참조하기 위해@viewChild 데코레이터를 사용한다
  @ViewChild('fileInput') fileInput?: ElementRef

  // 파일 내용과 타입을 저장하기 위한 signal을 선언
  fileContent = signal<string | ArrayBuffer | null>(null);
  fileType = signal<string | null>(null);

  constructor(private http: HttpClient) {}

  /**
   * 파일이 선택되었을 때 호출되는 메서드
   * @param event 
   */
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file: File = input.files[0];
      const reader = new FileReader();
      
      this.fileType.set(file.type)

      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string' || result instanceof ArrayBuffer) {
          this.fileContent.set(result);
          this.uploadFile(file)
        }
      };

      reader.readAsDataURL(file);

    }
  }

  // 이 부분이 범용성있는 데이터가 되어야 함ㄴ
  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file, file.name);

    this.http.post('http://localhost:3000/uploads', formData).subscribe({
      next: (response) => console.log('업로드 성공', response),
      error: (error) => console.log('업로드 실패', error)
      });
  }

  onUpload() {
    const fileInpt = this.fileInput?.nativeElement
    fileInpt.click();
  }

}

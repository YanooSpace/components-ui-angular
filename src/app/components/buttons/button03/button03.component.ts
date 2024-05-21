import { Component, ElementRef, EventEmitter, Output, ViewChild, signal } from '@angular/core';
import { RemoveBtnComponent } from '../remove-btn/remove-btn.component';

@Component({
  selector: 'app-button03',
  standalone: true,
  imports: [RemoveBtnComponent],
  templateUrl: './button03.component.html',
  styleUrl: './button03.component.scss'
})
export class Button03Component {

  // 템플릿 내에서 fileInput 요소를 참조하기 위해@viewChild 데코레이터를 사용한다
  @ViewChild('fileInput') fileInput?: ElementRef

  // 파일 내용과 타입을 저장하기 위한 signal을 선언
  fileContent = signal<string | ArrayBuffer | null>(null);
  fileType = signal<string | null>(null);

  // 파일 업로드 이벤트를 외부로 전파하기 위한 EventEmitter를 정의
  @Output() fileUploaded = new EventEmitter<File>();

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
          // 파일이 로드되면 fileUploaded 이벤트를 발생
          this.fileUploaded.emit(file);
        }
      };

      reader.readAsDataURL(file);

    }
  }

  onUpload() {
    const fileInpt = this.fileInput?.nativeElement
    fileInpt.click();
  }

  removeFile(){
    this.fileContent.set(null);
    this.fileType.set(null);
  }

}

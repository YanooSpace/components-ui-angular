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

  @ViewChild('fileInput') fileInput?: ElementRef

  fileContent = signal<string | ArrayBuffer | null>(null);
  fileType = signal<string | null>(null);

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
        }
      };

      reader.readAsDataURL(file);

    }

  }

  onUpload() {
    const fileInpt = this.fileInput?.nativeElement
    fileInpt.click();
  }

}

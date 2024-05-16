import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button01',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './button01.component.html',
  styles: ``
})
export class Button01Component {

  visible:boolean = false;

  modal:string = 'flex flex-col gap-3 px-[2rem] py-[1rem] justify-center items-center border-slate-100 border-[1px] bg-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[1rem]'

  viewContent(){
    this.visible = !this.visible
    console.log(this.visible)
  }

}

import { Component } from '@angular/core';
import { RouterLink  } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CType } from '../../interface/component-type.interface';

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
  componentList: CType[] = [
    {
      id:1,
      title: 'test1',
      imageUrl: 'ddd',
      route: 'buttons'
    },
    {
      id:2,
      title: 'test2',
      imageUrl: 'ddd',
      route: 'buttons'
    },
    {
      id:3,
      title: 'test3',
      imageUrl: 'ddd',
      route: 'buttons'
    },
    {
      id:4,
      title: 'test4',
      imageUrl: 'ddd',
      route: 'buttons'
    },
    {
      id:5,
      title: 'test5',
      imageUrl: 'ddd',
      route: 'buttons'
    }
  ]
}

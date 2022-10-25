import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string}| null = null;
  tasks: Task [] = [
    {
      name: 'Siłownia',
      deadline: '2022-12-31',
      done: false
    },
    {
      name: 'Nauka Angulara',
      deadline: '2023-01-31',
      done: false
    },
    {
      name: 'Malowanie',
      deadline: '2023-03-31',
      done: false
    }
  ]

  

  constructor(){
    setTimeout( () => {
      this.config = {
      title: 'Lista zadań do zrobienia',
      footer: '&copy Lista zadań zbudowana w Angularze',
      date: new Date().toDateString()
    };}, 500);
  }
}

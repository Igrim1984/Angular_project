import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskName: string = "";
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
  title: any;

  

  constructor(){
    setTimeout( () => {
      this.config = {
      title: 'Lista zadań do zrobienia',
      footer: '&copy Lista zadań zbudowana w Angularze',
      date: new Date().toDateString()
    };}, 500);
  }

  clearTasks() {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent){
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

  createTask(){
    const task: Task = {
      name: this.taskName,
      deadline: '2022-12-31',
      done: false,
    };
    this.tasks.push(task);
  }
}


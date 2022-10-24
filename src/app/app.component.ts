import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string}| null = null;

  

  constructor(){
    setTimeout( () => {
      this.config = {
      title: 'Lista zadań do zrobienia',
      footer: '&copy Lista zadań zbudowana w Angularze',
      date: new Date().toDateString()
    };}, 500);
  }
}

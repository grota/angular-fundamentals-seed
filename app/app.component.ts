import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
  <button 
  (click)="handleClick()"
  >press me </button>
    <input
    type="text"
    [ngModel]="name"
    (ngModelChange)="handleChange($event)" >
    <input
    type="text"
    [(ngModel)]="name">
    <div>
    {{ name }}
    </div>
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: string = 'todd';
  handleChange(value: string) {
    this.name = value;
  };
  handleClick() {
    this.name = 'aaaaaaa';
  }
}

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
    [value]="name"
    (blur)="handleBlur($event)"
    (input)="handleInput($event)"
    >
    {{ name }}
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: string = 'todd';
  handleInput(event: any) {
    this.name = event.target.value;
  };
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
  handleClick() {
    this.name = 'aaaaaaa';
  }
}

import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
  <button (click)="handleClick(username.value)" >get value</button>
    <input type="text" #username>
    <div> {{ name }} </div>
  </div>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: string = 'todd';
  handleClick(v: string) {
    console.log(v);
  }
}

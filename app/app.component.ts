import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <input type="text"
    [value]="name"
    (input)=handleChange($event.target.value)
    >
  </div>
  <div *ngIf="name.length > 2">
    Searching for... {{name}}
  </div>
  <template [ngIf]="name.length > 2">
    <div>
      TPL Searching for... {{name}}
    </div>
  </template>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  name: string = '';
  handleChange(value: string) {
    this.name=value;
  }
}

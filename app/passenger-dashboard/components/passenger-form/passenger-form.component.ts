import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-form',
  template: `
  <form #form="ngForm" novalidate>
    {{detail | json}}
    <div>
      Passenger Name:
      <input
      type="text"
      name="fullname"
      [ngModel]="detail?.fullname"
      >
    </div>
    <div>
      Passenger id:
      <input
      type="number"
      name="id"
      [ngModel]="detail?.id"
      >

    </div>
    <label>
      <input type="radio" name="checkedIn" [ngModel]="detail?.checkedIn" [value]="true"
      (ngModelChange)="toggleCheckin($event)"
      >
      Yes
    </label>
    <label>
      <input type="radio" name="checkedIn" [ngModel]="detail?.checkedIn" [value]="false"
      (ngModelChange)="toggleCheckin($event)"
      >
      No
    </label>
    <div>

    </div>
    <div *ngIf="form.value.checkedIn">
    Check in date:
      <input type="number"
       name="checkInDate"
       [ngModel]="detail?.checkInDate"
       >
    </div>
    {{ form.value | json}}
  </form>
  `,
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  toggleCheckin(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}

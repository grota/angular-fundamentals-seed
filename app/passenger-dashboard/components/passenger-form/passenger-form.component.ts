import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
import { Baggage } from '../../models/baggage.interface'

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
      <input type="checkbox" name="checkedIn" [ngModel]="detail?.checkedIn" [value]="true"
      (ngModelChange)="toggleCheckin($event)">
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

    <div>
      Luggage:
        <select
        name="baggage"
        [ngModel]="detail?.baggage">
          <option
          *ngFor="let item of baggage"
          [value]="item.key"
          [selected]="item.key === detail?.baggage">
          {{item.value}}
          </option>
        </select>
    </div>
    <div>
      Another Luggage with ngValue:
        <select
        name="baggage"
        [ngModel]="detail?.baggage">
          <option
          *ngFor="let item of baggage"
          [ngValue]="item.key">
          {{item.value}}
          </option>
        </select>
    </div>
    {{ form.value | json}}
  </form>
  `,
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      'key': 'none',
      'value': 'No baggage'
    }, {
      'key': 'hand-only',
      'value': 'Hand baggage'
    }, {
      'key': 'hold-only',
      'value': 'Hold baggage'
    }, {
      'key': 'hand-hold',
      'value': 'Hand and Hold baggage'
    }
  ]
  toggleCheckin(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}

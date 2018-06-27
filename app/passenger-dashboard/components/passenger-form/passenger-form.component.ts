import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
import { Baggage } from '../../models/baggage.interface'

@Component({
  selector: 'passenger-form',
  template: `
  <form (ngSubmit)="handleSubmit(form.value, form.valid) "#form="ngForm" novalidate>
    <div>
      Passenger Name:
      <input
      type="text"
      name="fullname"
      required
      minlength=2
      #fullname="ngModel"
      [ngModel]="detail?.fullname"
      >
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
      Passenger name is required
      </div>
      <div *ngIf="fullname.errors?.minlength && fullname.dirty" class="error">
      Min length is {{ fullname.errors.minlength.requiredLength }}
      </div>
    </div>
    <div>
      Passenger id:
      <input
      type="number"
      required
      name="id"
      #id="ngModel"
      [ngModel]="detail?.id" >
      <div *ngIf="id.errors?.required && id.touched" class="error">
      Id is required
      </div>

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
    <button type="submit" [disabled]="form.invalid">
    Update Passenger
    </button>
  </form>
  `,
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

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

  handleSubmit(passenger: Passenger, isvalid: boolean) {
    if (isvalid) {
      this.update.emit(passenger)
    }
  }
}

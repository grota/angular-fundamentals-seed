import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
@Component({
  selector: 'passenger-detail',
  template: `
  <div>
    <span class="status" [class.checked-in]="detail.checkedIn"></span>
    {{detail.fullname}}
    <div class="date">
      Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
    </div>
    <div class="children">
      Children: {{ detail.children?.length || 0 }}
    </div>
  </div>
  `,
  styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent{
  @Input()
  detail: Passenger;
  constructor() {}
}

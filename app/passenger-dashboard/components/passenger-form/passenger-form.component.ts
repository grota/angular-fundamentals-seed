import { Component, Input } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'

@Component({
  selector: 'passenger-form',
  template: `
  <form>
    Form!
    <div>
    {{detail | json}}
    </div>
  </form>
  `,
  styleUrls: ['passenger-form.component.scss']
})
export class PassengerFormComponent {

  @Input()
  detail: Passenger;
}

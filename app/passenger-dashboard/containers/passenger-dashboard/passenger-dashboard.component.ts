import { Component, OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
import { PassengerDashboardService } from '../../passenger-dashboard.service'

@Component({
  selector: 'passenger-dashboard',
  template: `
  <div>
    <passenger-count [items]="passengers" > </passenger-count>
    <div *ngFor="let pass of passengers;">
      {{pass.fullname}}
    </div>
    <passenger-detail
    *ngFor="let passenger of passengers"
    [detail]="passenger"
    (remove)="handleRemove($event)"
    (edit)="handleEdit($event)"
    >
    </passenger-detail>
  </div>
  `,
  styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event)
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id
    })
  }
}

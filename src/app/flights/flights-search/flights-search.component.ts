import {Component, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.css']
})
export class FlightsSearchComponent {
  @Output() flightSearchForm: any;

  constructor() {
    this.flightSearchForm = {
      title: 'Flights',
      from: '',
      to: '',
    }

    const readyEvent = new CustomEvent('ready', {
      detail: { name: 'FlightsSearchComponent' },
    });
    // NOTE: Here we are listening for the event from the shell to get the form data
    window.addEventListener('addOriginData', (originEvent: any) => {
      console.log(originEvent.detail);
      if (originEvent.detail.form) {
        this.flightSearchForm = originEvent.detail.form;
      }
    });

    // NOTE: this lets the shell know that this component is ready to receive events
    //       leave this line at the end of the constructor || ensure it is called after all event listeners are added
    window.dispatchEvent(readyEvent);
  }


  search(): void {
    // TODO: Implement search returning the data to shell front-end with events
    alert('Not implemented for this demo!');
  }

  terms(): void {
    alert('Not implemented for this demo!');
  }

}

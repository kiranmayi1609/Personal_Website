import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {
  milestones = [
    {
      year: '2020',
      description: 'Started my journey in programming.'
    },
    {
      year: '2021',
      description: 'Data Analytics '
    }
    
  ];

}

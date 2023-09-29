import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {
  milestones :any []=[
    {
      year: '2021',
      title:'',
      description: 'Started my journey in programming.'
    },
    {
      year: '2019',
      title:'',
      description: 'REDI School Digital integration  '
    },
    //Add more timeline items here as needed 
    {
      year: '2019',
      title:'',
      description: 'REDI School Digital integration  '
    },
    {
      year: '2019',
      title:'',
      description: 'REDI School Digital integration  '
    }

    
  ];

}

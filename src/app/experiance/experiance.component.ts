import { Component } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent {
  jobHistory = [
    {
      position: 'Internship',
      Organization: 'TEC praktic center',
      startDate: 'April 2020',
      endDate: 'Present',
      responsibilities: [
        'Developing and maintaining web applications.',
        'Implement UI/UX improvements.',
        'Optimizing website performance.'
      ]
    },
    {
      position: 'Data Analyst ',
      company: 'XYZ Inc.',
      startDate: 'July 2018',
      endDate: 'December 2019',
      responsibilities: [
        'Building RESTful APIs for the company\'s products.',
        'Database design and management.',
        'Troubleshooting and debugging backend issues.'
      ]
    }
  ];
}



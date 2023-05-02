import { Component } from '@angular/core';


interface Project{
  name:string;
  image:string;
  description:string;
  url:string;
}


@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.css']
})
export class ProjectGridComponent {
  projects:Project[]=[
    {
      name:'Project 1',
      image:'/assets/images/img-08.jpg',
      description:'Project 1 Description',
      url:''

    },
    {
      name:'Project 2',
      image:'/assets/images/img-08.jpg',
      description:'Project 2 Description',
      url:''

    },
    {
      name:'Project 3',
      image:'/assets/images/img-08.jpg',
      description:'Project 3 Description',
      url:''

    },
  ]

}



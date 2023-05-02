import { Component, Input, OnInit } from '@angular/core';
import { ProjectGridComponent } from '../project-grid/project-grid.component';
// import { ServciesComponent } from '../servcies/servcies.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
@Input() name!:string;
@Input() image!:string;
@Input() description!:string;
@Input() url!:string;
}

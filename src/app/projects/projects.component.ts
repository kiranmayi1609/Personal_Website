import { Component, Input, OnInit } from '@angular/core';
// import{ NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap'


// import { ServciesComponent } from '../servcies/servcies.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  activeTab='first';
// @Input() name!:string;
// @Input() image!:string;
// @Input() description!:string;
// @Input() url!:string;
// ngOnInit(): void {
  
// }
// //function to handle tab change 
// onTabChange($event:NgbTabChangeEvent)
// {
//   this.activeTab=$event.nextId;
// }
projects =[
  {
    title:"CryptoCurrency Portfolio Mgmt ",
    description:"Angualr framework & Asp.net web api with Entity framework ",
  },
  {
    title:"Todo-app",
    description:"Html,css with Bootstrap and Javascript  ",
  },
  {
    title:"Blazor Crud operations ",
    description:"Blazor GUI with Crud operations "
    
  }


]
}

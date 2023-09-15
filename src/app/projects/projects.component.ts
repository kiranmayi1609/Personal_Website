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
projects :any []=[
  {
    title:"CryptoCurrency Portfolio Mgmt ",
    description:"Angualr framework & Asp.net web api with Entity framework ",
    imageUrl:'/assets/images/crypto.JPG',
    frontendLink:'https://github.com/kiranmayi1609/WebAPI_Angular ',
    webApiLink:'https://github.com/kiranmayi1609/CryptoCurrency',
    githubIoLink:'https://kiranmayi1609.github.io/WebAPI_Angular/',
    isZoomed:false, //add this property to control zoom 
  },
  

  {
    title:"FoodOrder-app",
    description:"Html,css with Bootstrap and Javascript  ",
    imageUrl:'/assets/images/foodorder.JPG',
    frontendLink:'https://github.com/kiranmayi1609/myJavascript_H2/tree/main/Food_order',
    githubIoLink:'https://kiranmayi1609.github.io/myJavascript_H2/',
    isZoomed:false //add this property to control zoom 
  },

  {
    title:"Todo-app",
    description:"Html,css with Bootstrap and Javascript  ",
    imageUrl:'/assets/images/Todo app.JPG',
    frontendLink:'https://github.com/kiranmayi1609/myJavascript_H2',
    githubIoLink:'https://kiranmayi1609.github.io/myJavascript_H2/',
    isZoomed:false, //add this property to control zoom 
  },
  {
    title:"Blazor Crud operations ",
    description:"Blazor GUI with Crud operations ",
    githubLink:'',
    githubIoLink:'',
    isZoomed:false, //add this property to control zoom 
    
  }


];
// zoomImage(event:Event){
//   //Add a css class to the clicked image to trigger the Zoom effect 
//   const image=event.target as HTMLElement;
//   image.classList.toggle('zommed');
// }
zoomImage(project:any):void 
{
  // const image=new Image();
  // image.src=imageUrl;
  // image.classList.add('project-image','zoomed');
  // document.body.appendChild(image);

  // image.addEventListener('click',()=>{
  //   document.body.removeChild(image);
  // });
  project.iszoomed=!project.isZoomed;
}

}

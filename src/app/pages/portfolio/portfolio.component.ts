// import { PortfolioService } from './portfolioService';
import { Component, OnInit } from '@angular/core';
import { PortfolioProjectService } from 'src/app/services/portfolio-project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  constructor(private service:PortfolioProjectService){}
  projectData:any;
  ngOnInit():void{
    this.projectData=this.service.projectDetails;
  }
  // portfolioItems=[];

  // constructor(private portfolioService:PortfolioService) {}

  // ngOnInit(): void {
  //   //fetch portfolio items from the service 
  //   try{
  //     this.portfolioItems=this.portfolioService.getPortfolioItems();

  //   }catch(error){
  //      console.error('Error fetching portfolio items:' ,error );
  //   }
    
    
    
  // }

  // projects :any []=[
  //   {
  //     title:"CryptoCurrency Portfolio Mgmt ",
  //     description:"Angualr framework & Asp.net web api with Entity framework ",
  //     imageUrl:'/assets/images/crypto.JPG',
  //     frontendLink:'https://github.com/kiranmayi1609/WebAPI_Angular ',
  //     webApiLink:'https://github.com/kiranmayi1609/CryptoCurrency',
  //     githubIoLink:'https://kiranmayi1609.github.io/WebAPI_Angular/',
  //     // isZoomed:false, 
  //    isExpanded:false,
  //   },
    
  
  //   {
  //     title:"FoodOrder-app",
  //     description:"Html,css with Bootstrap and Javascript  ",
  //     imageUrl:'/assets/images/foodorder.JPG',
  //     frontendLink:'https://github.com/kiranmayi1609/myJavascript_H2/tree/main/Food_order',
  //     githubIoLink:'https://kiranmayi1609.github.io/myJavascript_H2/',
  //     isZoomed:false //add this property to control zoom,
     
  //   },
  
  //   {
  //     title:"Todo-app",
  //     description:"Html,css with Bootstrap and Javascript  ",
  //     imageUrl:'/assets/images/Todo app.JPG',
  //     frontendLink:'https://github.com/kiranmayi1609/myJavascript_H2',
  //     githubIoLink:'https://kiranmayi1609.github.io/myJavascript_H2/',
  //     isZoomed:false, //add this property to control zoom,
  //     isClicked:false,
    
  //   },
  //   {
  //     title:"Blazor Crud operations ",
  //     description:"Blazor GUI with Crud operations ",
  //     githubLink:'',
  //     githubIoLink:'',
  //     isZoomed:false, //add this property to control zoom 
        
  //   }
  
  
  // ];
  // zoomImage(event:Event){
  //   //Add a css class to the clicked image to trigger the Zoom effect 
  //   const image=event.target as HTMLElement;
  //   image.classList.toggle('zommed');
  // }
  // zoomImage(project:any):void 
  // {
  //   project.isClicked=true;
    // const image=new Image();
    // image.src=imageUrl;
    // image.classList.add('project-image','zoomed');
    // document.body.appendChild(image);
  
    // image.addEventListener('click',()=>{
    //   document.body.removeChild(image);
    // });
  //   project.iszoomed=!project.isZoomed;
  // }
  // viewProjectDetails(project:any)
  // {
  //   project.isExpanded=!project.isExpanded;
  // }
  
  
  

}

// import { faArrowRightCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { PortfolioProjectService } from 'src/app/services/portfolio-project.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dynamicName ='Kiranmayi Tummala ' 
  dynamicColor='#ffc14d';
  dynamicWidth=96;
  isHidden=true;
 //Define projectData as an array to store project inforamtion 
  // constructor(private service:PortfolioProjectService) {}
  // projectData:any;
  
  // ngOnInit():void{
   
  //   this.projectData=this.service.projectDetails;

  // }

  changeColor() {
    this.dynamicColor = '#FDF1E';
  }

  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }
}

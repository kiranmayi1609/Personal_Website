// import { faArrowRightCircle } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dynamicName ='Kiranmayi Tummala ' //Replace your dynamic data 
  //Define properties for content 
  title:string='Welcome to my website';
 content:string="I'm a developer..... ";
  // isVisible: boolean = false;
  // textArray: string[] = ["Web Developer", "Web Designer", "UI/UX Designer"];
  // headerImg: string = '/assets/images/rocket_bg.JPG '; // Adjust the image path
  
  // faArrowRightCircle = faArrowRightCircle;
   
}

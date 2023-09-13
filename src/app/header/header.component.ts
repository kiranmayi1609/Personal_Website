import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { navbarData } from './nav-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  //Define data properties here 
  showHomeContent:boolean=true;//property for ngIf 

  //Method to toggle the value of showHomeContent 
  toggleHomeContent()
  {
    this.showHomeContent=!this.showHomeContent;

  }
  // constructor(private router:Router) {}
  // scrollToComponent(componentName:string):void{
  //   const element=document.getElementById(componentName);
  //   if(element){
  //     element.scrollIntoView({
  //       behavior:'smooth',
  //       block:'start',
  //       inline:'nearest',
  //     });
  //   }
  // }
  // navigateTo(componentName:string):void{
  //   this.router.navigate([componentName]);
  //   this.scrollToComponent(componentName);
  // }
  
  
  // // showHomeContent = false ;
  // constructor(private route:Router) { }
  // ngOnInit() {
  //   //subscribe to router events to check if the current URL is '/home'
  //   this.route.events.subscribe(event => {
  //     if(event instanceof NavigationEnd)
  //     this.showHomeContent = event.url === 'home';
  //   });

  // }
}

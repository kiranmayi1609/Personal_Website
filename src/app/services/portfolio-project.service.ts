import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {

  constructor() { }
  projectDetails=[
    {
      id:1,
      projectName:"CryptoCurrency",
      ProjectImg:"../../assets/images/crypto.JPG"

    },
    {
      id:2,
      projectName:"Foodorder",
      ProjectImg:"../../assets/images/foodorder.JPG"

    },
    {
      id:3,
      projectName:"Todoapp",
      ProjectImg:"../../assets/images/Todoapp.JPG"

    },
    
  ]
}

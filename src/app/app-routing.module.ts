import { ExperianceComponent } from './pages/experiance/experiance.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { HeaderComponent } from './sharepage/header/header.component';

const routes: Routes = [
  //its import components you've created and define the routes as you specified 
//  {path:'',redirectTo:'/home',pathMatch:'full'},
{ path: '', component: HomeComponent },
  {path :'about',component:AboutComponent},
  { path: 'experience', component:ExperianceComponent },
  {path :'portfolio',component:PortfolioComponent},
  {path :'journey',component:JourneyComponent},
  {path :'contact',component:ContactComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

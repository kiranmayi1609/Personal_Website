import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JourneyComponent } from './journey/journey.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
const routes: Routes = [
 {path:'',redirectTo:'/home',pathMatch:'full'},
  // {path:'',component:HeaderComponent},
  {path :'home',component:HomeComponent},
  {path :'About',component:AboutComponent},
  {path :'Portfolio',component:PortfolioComponent},
  {path:'Projects',component:ProjectsComponent},
  {path :'Journey',component:JourneyComponent},
  {path :'Contact',component:ContactComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

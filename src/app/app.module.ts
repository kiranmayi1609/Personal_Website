import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { CVComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ExperianceComponent } from './experiance/experiance.component';
import { JourneyComponent } from './journey/journey.component';
import { ProjectGridComponent } from './project-grid/project-grid.component';
// import { ServciesComponent } from './servcies/servcies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProjectsComponent,
    AboutComponent,
    CVComponent,
    ContactComponent,
    PortfolioComponent,
    ExperianceComponent,
    JourneyComponent,
    ProjectGridComponent,
    // ServciesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

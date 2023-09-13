import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';



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
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';

// import { ServciesComponent } from './servcies/servcies.component';

@NgModule({
  declarations: [
    //its componetns 
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
    WelcomeMessageComponent
    
    // ServciesComponent,


  ],
  imports: [
    //its modules 
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
    // MatToolbarModule,
    // MatSidenavModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

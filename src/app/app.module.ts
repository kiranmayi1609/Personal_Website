import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './sharepage/header/header.component';

import { AboutComponent } from './pages/about/about.component';
import { CVComponent } from './cv/cv.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ExperianceComponent } from './pages/experiance/experiance.component';
import { JourneyComponent } from './pages/journey/journey.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FooterComponent } from './sharepage/footer/footer.component';

// import { ServciesComponent } from './servcies/servcies.component';

@NgModule({
  declarations: [
    //its componetns 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    CVComponent,
    ContactComponent,
    PortfolioComponent,
    ExperianceComponent,
    JourneyComponent,
    WelcomeMessageComponent,
    FooterComponent
    
    // ServciesComponent,


  ],
  imports: [
    //its modules 
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
   
    // MatToolbarModule,
    // MatSidenavModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

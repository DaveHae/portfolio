import { PortfolioTextComponent } from './main/portfolio-text/portfolio-text.component';
import { FooterComponent } from './main/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileImageComponent } from './main/profile-image/profile-image.component';
import { MainComponent } from './main/main.component';
import { BackgroundComponent } from './background/background.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
   declarations: [
      AppComponent,
      ProfileImageComponent,
      FooterComponent,
      MainComponent,
      BackgroundComponent,
      PortfolioTextComponent
   ],
   imports: [
      BrowserModule,
      ParticlesModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

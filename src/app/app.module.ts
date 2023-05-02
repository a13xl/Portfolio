import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './sites/about-me/about-me.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { ImpressumComponent } from './sites/impressum/impressum.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    AboutMeComponent,
    NavigationBarComponent,
    ProjectsComponent,
    FooterComponent,
    HomeComponent,
    ImpressumComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'impressum', component: ImpressumComponent},
    ],
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'disabled'
    }),
    /* AppRoutingModule,
    FormsModule,
    ReactiveFormsModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

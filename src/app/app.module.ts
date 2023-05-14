import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './sites/about-me/about-me.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './sites/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LegalNoticeComponent } from './sites/legal-notice/legal-notice.component';

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
    LegalNoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

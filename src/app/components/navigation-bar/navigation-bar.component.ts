import { Component, ViewChild } from '@angular/core';
import { SiteNavigationService } from 'src/app/services/site-navigation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent{
  menuElement = [
    {
      name: "STARTSEITE",
      //class: "home",
      anchorLink: "'/', 'home'",
      anchorLinkMobile: "'/', 'home'"
    },
    {
      name: "ÜBER MICH",
      //class: "about-me",
      anchorLink: "/about-me', 'about-me",
      anchorLinkMobile: "/', 'about-me"
    },
    {
      name: "MEINE PROJEKTE",
      //class: "projects",
      anchorLink: "'/', 'projects'",
      anchorLinkMobile: "'/', 'projects'"
    }
  ]

  constructor(public siteNavigation: SiteNavigationService) { }

  openMenu() {
    console.log('open Menu');
    
  }
}

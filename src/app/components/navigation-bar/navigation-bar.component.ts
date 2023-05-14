import { Component, ElementRef, ViewChild } from '@angular/core';
import { SiteNavigationService } from 'src/app/services/site-navigation.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent{
  @ViewChild('checkbox') burgerCheck: ElementRef;
  @ViewChild('mobileMenu') mobileMenu: ElementRef;

  menuElements = [
    {
      name: "STARTSEITE",
      //class: "home",
      router: "/",
      anchorLink: "home",
      routerMobile: "/"
    },
    {
      name: "ÜBER MICH",
      //class: "about-me",
      router: "/about-me",
      anchorLink: "about-me",
      routerMobile: "/"
    },
    {
      name: "MEINE PROJEKTE",
      //class: "projects",
      router: "/",
      anchorLink: "projects",
      routerMobile: "/"
    }
  ]

  constructor(public siteNavigation: SiteNavigationService) { }

  openMenu() {
    const burgerOpn = this.burgerCheck.nativeElement;
    const mobileNav = this.mobileMenu.nativeElement;

    console.log(burgerOpn.checked); // true is closing

    if(burgerOpn.checked) {
      mobileNav.classList.add('d-none');
    } else {
      mobileNav.classList.remove('d-none');
    }
  }

  closeMobileMenu() {
    this.openMenu();
    this.burgerCheck.nativeElement.checked = false;
  }

}

import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
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

  constructor(public siteNavigation: SiteNavigationService, 
    @Inject(DOCUMENT) private document: Document) { }

  openMenu() {
    const burgerOpn = this.burgerCheck.nativeElement;
    const mobileNav = this.mobileMenu.nativeElement;

    if(burgerOpn.checked) {
      mobileNav.classList.add('d-none');
      this.document.body.classList.remove('overflow-h');
      
    } else {
      mobileNav.classList.remove('d-none');
      this.document.body.classList.add('overflow-h');
    }
  }

  closeMobileMenu() {
    this.burgerCheck.nativeElement.checked = true;
    this.openMenu();
    this.burgerCheck.nativeElement.checked = false;
  }

}

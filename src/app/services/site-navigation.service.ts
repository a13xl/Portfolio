import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SiteNavigationService {

  constructor(private router: Router) { }

  /* scrollSmoothTop(url: string) { // only scroll smooth when on same site
    if(this.router.url === url || this.router.url.startsWith(url+'#')) {
      window.scroll({
        top: 0,
        left:0,
        behavior: 'smooth'
      })
    } else {
      // scroll to top instant
      this.scrollTop();
    }
  } */

  async goToAnchor(url: string, anchor: string) {
    if(this.router.url != url) {
      await this.router.navigateByUrl(url);
      this.scrollTop();
    }
    document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }
  
}

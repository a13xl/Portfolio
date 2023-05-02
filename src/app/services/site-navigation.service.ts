import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SiteNavigationService {

  constructor(private router: Router) { }

  scrollHeader(url: string) { // only scroll smooth when on same site
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
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  async goToAnchor(url: string, anchor: string) {
    await this.router.navigateByUrl(url);
    await this.scrollTop();
    document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
  }
}

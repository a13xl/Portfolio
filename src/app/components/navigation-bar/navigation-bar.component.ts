import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../../sites/home/home.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  url = '/';

  constructor(private router: Router) { }

  scrollHeader() { // only scroll smooth when on same site
    if(this.router.url === this.url || this.router.url.startsWith(this.url+'#')) {
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

  async goToAnchor(anchor: any) {
    await this.router.navigateByUrl(this.url)
    document.getElementById(anchor).scrollIntoView({behavior: "smooth"});
  }

}

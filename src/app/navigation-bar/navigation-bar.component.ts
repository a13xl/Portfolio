import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  constructor(public router: Router) { }

  scrollHeader() { // only scroll smooth when on same site
    if(this.router.url === '/' || this.router.url.startsWith('/#')) {
      window.scroll({
        top: 0,
        left:0,
        behavior: 'smooth'
      })
    } else {
      // jump to top
      window.scrollTo(0, 0);
    }
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

}

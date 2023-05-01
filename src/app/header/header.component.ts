import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  url = '/';

  constructor(private router: Router) { }

  goToAnchor(anchor: any) {
    this.router.navigateByUrl(this.url+'#'+anchor);
  }

}

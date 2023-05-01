import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {
  url = 'impressum';

  constructor(private router: Router) { }

  goToAnchor(anchor: any) {
    this.router.navigateByUrl(this.url+'#'+anchor);
  }

}

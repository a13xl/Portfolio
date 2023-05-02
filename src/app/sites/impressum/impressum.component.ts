import { Component } from '@angular/core';
import { SiteNavigationService } from 'src/app/services/site-navigation.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent {

  constructor(public siteNavigation: SiteNavigationService) { }

}

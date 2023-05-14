import { Component } from '@angular/core';
import { SiteNavigationService } from 'src/app/services/site-navigation.service';

@Component({
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
  fullname = "Alexander Lovasz"
  street = "Gärtnerweg 1"
  city = "83329 Waging am See"
  phone = "08681 4790 946"
  email = "alex.lovasz@tuta.io"

  constructor(public siteNavigation: SiteNavigationService) { }

}

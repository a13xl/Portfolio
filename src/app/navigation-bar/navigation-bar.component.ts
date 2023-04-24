import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  goToTop() {
    window.scroll({
      top: 0,
      left:0,
      behavior: 'smooth'
    })
  }

}

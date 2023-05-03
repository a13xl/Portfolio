import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // NOT WORKING ON ABOUT-ME
  // Set nav element activ with section scrolling
  sections: NodeListOf<HTMLElement>;
  navA: NodeListOf<HTMLElement>;

  ngOnInit() {
    this.sections = document.querySelectorAll('section');
    console.log('Sections:', this.sections);
    this.navA = document.querySelectorAll('nav .navi-container .navi-link a');
    console.log('navA:', this.navA);
  }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    //console.log("scrolling");
    

    var current: any = '';
    this.sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 80) {
        current = section.getAttribute('id');
      }
    });

    this.navA.forEach((a) => {
      a.classList.remove('active');
      console.log('current:', current);
      
      if (a.classList.contains(current)) {
        a.classList.add('active');      
      }
    });
  }
  
}

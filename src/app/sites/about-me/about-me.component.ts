import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import * as skillData from 'src/assets/skills.json';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  @ViewChildren('skillTitle', { read: ElementRef }) skillTitle: QueryList<ElementRef>;
  skills: any = skillData.default;

  toggleText(id: number) {
    this.skillTitle.toArray()[id].nativeElement.classList.toggle('d-none');
  }

}

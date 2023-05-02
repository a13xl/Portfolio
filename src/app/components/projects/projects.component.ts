import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import * as projectData from 'src/assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  @ViewChildren('categoryBtn', { read: ElementRef }) categoryBtn: QueryList<ElementRef>;
  @ViewChild('categoryAllBtn') categoryAllBtn: ElementRef;

  projects: any = projectData.default;
  projectsSort: Array<any> = [];
  categories: Array<any> = [];

  ngOnInit(): void {
    this.projectsSort = this.projects;

    // push all category once to category Array
    this.projects.forEach(project => {
      let category = project.category;
      if(!this.categories.includes(category)) {
        this.categories.push(category);
      }
    });
  }

  sortProjectCategory(id: number, category: string) {
    this.enableBtns();
    if(id == 99) { // all button
      this.categoryAllBtn.nativeElement.disabled = true;
    } else {
      this.categoryBtn.toArray()[id].nativeElement.disabled = true;
    }

    this.projectsSort = [];
    this.projects.forEach(project => {
      if(category == project.category) {
        this.projectsSort.push(project);
      } else if (category == 'all') {
        this.projectsSort = this.projects;
      }
    });
  }

  enableBtns() {
    this.categoryAllBtn.nativeElement.disabled = false;
    this.categoryBtn.forEach((categoryBtn: ElementRef) => {
      categoryBtn.nativeElement.disabled = false;
    });
  }



}

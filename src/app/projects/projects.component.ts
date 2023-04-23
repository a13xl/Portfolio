import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as projectData from 'src/assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  // @ViewChild('allProjects') allProjects!: ElementRef;

  projects: any = projectData.default;
  categories: Array<any> = [];

  ngOnInit(): void {
    this.projects.forEach(project => {
      let category = project.category;

      if(!this.categories.includes(category)) {
        this.categories.push(category);
      }
    });
  }

/*   sortProjects(category: string) {
    this.enableBtns();
    console.log(category);

    if(category == 'all') {
      this.allProjects.nativeElement.disabled = true;
    } else {
      let projectname = category+'Projects';
      //projectname.nativeElement.disabled = true;
    }
  }

  enableBtns() {
    this.allProjects.nativeElement.disabled = false;
    this.JavaScriptProjects.nativeElement.disabled = false;
    this.AngularProjects.nativeElement.disabled = false;
  } */


}

import { Component, ElementRef, ViewChild } from '@angular/core';
import * as projectData from 'src/assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent{
  @ViewChild('allProjects') allProjects!: ElementRef;
  @ViewChild('JSProjects') JSProjects!: ElementRef;
  @ViewChild('angularProjects') angularProjects!: ElementRef;
  @ViewChild('projectBox') projectBox!: ElementRef;

  projects: any = projectData.default;

  sortProjects(category: string) {
    this.enableBtns();

    
  }

  enableBtns() {
    this.allProjects.nativeElement.disabled = false;
    this.JSProjects.nativeElement.disabled = false;
    this.angularProjects.nativeElement.disabled = false;
  }


}

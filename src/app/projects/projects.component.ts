import { Component, OnInit } from '@angular/core';
import * as projectData from 'src/assets/projects.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  projects: any = projectData.default;

  ngOnInit(): void {
    /* console.log(this.projects); */
  }


}

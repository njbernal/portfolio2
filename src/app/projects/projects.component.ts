import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';
import { Project, CleanProject } from 'src/app/services/models';

import { data } from '../services/data'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public response: Array<Project>;
  public projects: Array<CleanProject>;
  private projectSub: Subscription;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  ngOnDestroy(): void {
    if (this.projectSub) {
      this.projectSub.unsubscribe()
    }
  }

  loadProjects() {
    const new_projects = [];
    let i = 0;
    for (let project of data) {
      let position = i % 2 != 0 ? 'project-left' : 'project-right'
      const obj = {
        title: project.title,
        status: project.status,
        description: project.description,
        image: `./assets/images/${project.image}`,
        tech: project.tech.tech,
        links: project.links.links,
        position
      } as CleanProject;
      new_projects.push(obj)
      i++;
    }
    this.projects = new_projects;
    // this.projectSub = this.httpService
    //   .getProjectsList()
    //   .subscribe((projectsList: APIResponse<Project>) => {
    //     const result = projectsList.data;
    //     const new_projects = [];
    //     let i = 0;
    //     for (let project of projectsList.data) {
    //       let position = i % 2 != 0 ? 'project-left' : 'project-right'
    //       const obj = {
    //         title: project.attributes.title,
    //         status: project.attributes.status,
    //         description: project.attributes.description,
    //         image: `${env.BASE_URL}${project.attributes.image.data.attributes.url}`,
    //         tech: project.attributes.tech.tech,
    //         links: project.attributes.links.links,
    //         position
    //       } as CleanProject;
    //       new_projects.push(obj)
    //       i++;
    //     }
    //     this.projects = new_projects;
    //   })
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';
import { APIResponse, Project, CleanProject } from 'src/app/services/models';
import { environment as env } from 'src/environments/environment';


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
    this.projectSub = this.httpService
      .getProjectsList()
      .subscribe((projectsList: APIResponse<Project>) => {
        const result = projectsList.data;
        const new_projects = [];
        for (let project of projectsList.data) {

          const obj = {
            title: project.attributes.title,
            status: project.attributes.status,
            description: project.attributes.description,
            image: `${env.BASE_URL}${project.attributes.image.data.attributes.formats.small.url}`,
            tech: project.attributes.tech.tech,
            links: project.attributes.links.links
          } as CleanProject;
          new_projects.push(obj)
        }
        this.projects = new_projects;
      })
  }
}

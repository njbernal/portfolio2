import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';
import { APIResponse, Project, CleanProject } from 'src/app/services/models';
import { environment as env } from 'src/environments/environment';

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

  // public data = [
  //   {
  //     title: "Royalty",
  //     status: "featured",
  //     description: "web app",
  //     links: {
  //       "links": [
  //         {
  //           "name": "Public",
  //           "url": "http://njb-royalty.s3-website-us-west-1.amazonaws.com/"
  //         },
  //         {
  //           "name": "Github",
  //           "url": ""
  //         },
  //         {
  //           "name": "More",
  //           "url": ""
  //         }
  //       ]
  //     },
  //     tech: {
  //       "tech": [
  //         "React",
  //         "Express",
  //         "Node",
  //         "MongoDB",
  //         "MERN",
  //         "Python (Automation)",
  //         "AWS",
  //         "CI/CD"
  //       ]
  //     },
  //     image: "royalty.png"
  //   },
  //   {
  //     title: "Ludo",
  //     status: "featured",
  //     description: "board game",
  //     links: {
  //       "links": [
  //         {
  //           "name": "Public",
  //           "url": ""
  //         },
  //         {
  //           "name": "Github",
  //           "url": ""
  //         },
  //         {
  //           "name": "More",
  //           "url": ""
  //         }
  //       ]
  //     },
  //     tech: {
  //       "tech": [
  //         "React",
  //         "Python",
  //         "Flask",
  //         "RESTful API",
  //         "Netlify",
  //         "Heroku"
  //       ]
  //     },
  //     image: "ludo.png"
  //   },
  //   {
  //     title: "Angular Portfolio",
  //     status: "featured",
  //     description: "This portfolio website!",
  //     links: {
  //       "links": [
  //         {
  //           "name": "Github",
  //           "url": ""
  //         },
  //         {
  //           "name": "Public",
  //           "url": ""
  //         },
  //         {
  //           "name": "More",
  //           "url": ""
  //         }
  //       ]
  //     },
  //     tech: {
  //       "tech": [
  //         "Angular",
  //         "TypeScript",
  //         "MaterialUI",
  //         "Google Cloud",
  //         "Strapi"
  //       ]
  //     },
  //     image: "website.png"
  //   }
  // ]
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

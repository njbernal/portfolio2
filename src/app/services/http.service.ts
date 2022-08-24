import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Project } from './models';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }

    getProjectsList(): Observable<APIResponse<Project>> {
        const params = new HttpParams().set('type', 'featured')
        const result = this.http.get<APIResponse<Project>>(`${env.BASE_URL}/api/projects?populate=*`);
        return result
    }

}

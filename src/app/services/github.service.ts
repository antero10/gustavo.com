import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GITHUB_URL} from '../models/Constants';
import {GithubProfile} from '../interfaces/Github';

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  getProfile() {
    return this.http.get<GithubProfile>(GITHUB_URL);
  }

  getRepos() {
    return this.http.get(GITHUB_URL + '/repos');
  }

  getStarred() {
    return this.http.get(GITHUB_URL + '/starred?type=owner');
  }
}

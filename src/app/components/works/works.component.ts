import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {Github} from '../../interfaces/Github';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.sass']
})
export class WorksComponent implements OnInit {

  private repos;
  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getStarred().subscribe((data: Github) => {
      this.repos = data;
    });
  }

}

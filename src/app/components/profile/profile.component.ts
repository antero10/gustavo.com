import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {GithubProfile} from '../../interfaces/Github';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {
  public profile: GithubProfile;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getProfile().subscribe(profile => this.profile = profile);
  }

}

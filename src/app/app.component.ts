import { Component, OnInit } from '@angular/core';
import { Repo } from './models/Repo';
import { GitHubService } from './services/github.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string = `JoyeshDebnath`;
  repos: Repo[] = [];
  loading: boolean = false;
  errorMessage: string = '';
  constructor(private _githubService: GitHubService) {}
  ngOnInit() {
    // this.getRepos();
  }
  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this._githubService.getRepos(this.username).subscribe(
      (response) => {
        console.log('Response Received !');
        this.repos = response;
      },

      (error) => {
        console.log('Some error occurred !');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        console.log('request Completed !');
        this.loading = false;
      }
    );
  }
}

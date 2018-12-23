import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public searchName: string = null;

  constructor(private _router: Router, private _appService: AppService) {

  }

  ngOnInit() {
    if (!this._appService.searchResult) {
      this._router.navigate(['search']);
    } else {
      this.searchName = this._appService.searchResult;
    }
  }

  search(): void {
    console.log(this.searchName);
    this._router.navigate(['search/landing']);
  }
}

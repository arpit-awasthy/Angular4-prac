import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  public searchName: string = null;

  constructor(private _router: Router, private _appService: AppService) {

  }

  ngOnInit() {

  }

  search(): void {
    console.log(this.searchName);
    if (this.searchName) {
      this._appService.searchResult = this.searchName;
      this._router.navigate(['/landing']);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Iuser } from './users.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  private storeUsers: Array<Iuser> = [];
  public users: Array<Iuser> = [];
  public search: string = null;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this._getUser();
  }

  public searchChange(e) {
    this.users = e === '' ? this.storeUsers : this.storeUsers.filter(it => (it.name === e));
  }

  private _getUser() {
    this._appService.getUsers().subscribe((success: Array<Iuser>) => {
      this.storeUsers = success.map(x => Object.assign({}, x));
      this.users = success;
      console.log(this.users);
    }, (error) => {
      console.log(error);
    });
  }
}

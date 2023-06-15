import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'age', 'action'];
   dataSource = new MatTableDataSource<User>();

  users = [];
  index= 1;
  errorMsg: string;
  userName:string;
  email:string;
  age:BigInteger;

  constructor(private _userService:UserService){}

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        // console.log(this.users)
        this.dataSource.data = this.users;
      },
      error: (error) => (this.errorMsg = error),
      complete: () => {}
    });
  }

}

export interface User{
  userName: string;
  email:string;
  age:number;
}



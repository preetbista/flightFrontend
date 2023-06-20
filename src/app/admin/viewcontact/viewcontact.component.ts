import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'message', 'action'];
   dataSource = new MatTableDataSource<Contact>();

   contacts = [];
   index= 1;
   errorMsg: string;

   name:string;
   message:string;

   constructor(private _contactService:ContactService) {}

   @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this._contactService.getContacts().subscribe({
      next: (data) => {
        this.contacts = data;
         //console.log(this.contacts)
        this.dataSource.data = this.contacts;
      },
      error: (error) => (this.errorMsg = error),
      complete: () => {}
    });
  }

}


export interface Contact{
    name:string;
    message:string;
}

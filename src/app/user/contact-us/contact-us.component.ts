import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [CdkDrag,MatFormFieldModule, MatInputModule, MatIconModule,NgIf,ReactiveFormsModule, FormsModule]
})



export class ContactUsComponent {

  contacts = {
      name: '',
      email: '',
      message: ''
  }

  constructor(private _contactService:ContactService){}

  email = new FormControl('', [Validators.required, Validators.email]);

  name = new FormControl('', [Validators.required]);

  public getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorName(){
    if(this.name.hasError('required')){
      return 'You must enter your name';
    }

    return this.name.hasError('name') ? 'Enter your name': '';
  }

  onSubmit(){
    console.log("form submitting")
    if((this.contacts.name != '' && this.contacts.email != '' && this.contacts.message != '') &&
    (this.contacts.name != null && this.contacts.email != null && this.contacts.message != null)){
      this._contactService.addContact(this.contacts)
        .subscribe({
          next: (response: any) => {
            console.log(response)
    alert(response);
          },
          error: (error) => alert("Could not send . Try again")
        }
          )
    }
  else{
console.log("validation failed")
  }
}
}

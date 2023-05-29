import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [CdkDrag,MatFormFieldModule, MatInputModule, MatIconModule,NgIf,ReactiveFormsModule]
})
export class ContactUsComponent {
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
}

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { NgIf, NgForOf } from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import { SeatserviceService } from 'src/app/service/seatservice.service';
import { Seatinterface } from 'src/app/service/seatinterface';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgIf,
    NgForOf,
    MatChipsModule,
    MatOptionModule
  ],
})
export class BookFlightComponent implements OnInit{

 constructor(private _formBuilder: FormBuilder, private _seatService:SeatserviceService){}

  public seats: Seatinterface[] = [];
  public errorMsg:string;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
  });

  isLinear = true;

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  selectedOption: string ='Esewa';

  changeSelected(option:string){
    this.selectedOption = option
  }

    ngOnInit(): void {
      this._seatService.getSeatName().subscribe({
        next: (data: Seatinterface[]) => {
          this.seats = data;
        },
        error: (error) => {
          this.errorMsg = error;
        },
        complete: () => {},
      });
    }

}


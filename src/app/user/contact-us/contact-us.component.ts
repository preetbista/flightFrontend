import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  standalone: true,
  imports: [CdkDrag]
})
export class ContactUsComponent {

}

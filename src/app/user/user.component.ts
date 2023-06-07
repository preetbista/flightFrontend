
import { Component } from "@angular/core";

@Component({
  selector: 'app-user',
  template: `
  <!-- <main [style]="{'display': 'flex', 'flex-direction':'column', 'height': '100vh'}">
  <app-header></app-header>
  <section [style]="{'flex': 1}">
    <router-outlet></router-outlet>
  </section>
  <app-footer></app-footer>
</main> -->
  <router-outlet></router-outlet>
  `,
})
export class UserComponent{


}

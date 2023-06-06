import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from '../user/header/header.component';
import { FooterComponent } from '../user/footer/footer.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ]

})
export class SharedModuleModule {

}

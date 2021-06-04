import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponentComponent } from './footer/footer-component.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponentComponent
  ],
  exports:[
    SidebarComponent,
    FooterComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

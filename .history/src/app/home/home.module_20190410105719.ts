import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent, MenuComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    // HomeRoutingModule
    RouterModule.forChild([{ path: '', component: MenuComponent }])
  ]
})
export class HomeModule { }

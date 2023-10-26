import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { AuthComponent } from './components/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';

import { InsurComponent } from './components/insur/insur.component';
import { InfoComponent } from './components/info/info.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { PopoverComponent } from './components/header/popover/popover.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage, 
    HeaderComponent,
    PopoverComponent,
    ContentsComponent,
    FooterComponent,
    InfoComponent,
    AuthComponent,
    InsurComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class HomePageModule {}

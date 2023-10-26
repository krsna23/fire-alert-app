import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './home/components/contents/contents.component';
import { InfoComponent } from './home/components/info/info.component';
import { AuthComponent } from './home/components/auth/auth.component';
import { InsurComponent } from './home/components/insur/insur.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ContentsComponent  
  },
  {
    path: 'home/info',
    component: InfoComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'insur',
    component: InsurComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

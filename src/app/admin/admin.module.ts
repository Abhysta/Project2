import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialDesign } from '../material/material';
import { HomeComponent } from './home/home.component';
import { SerendipityComponent } from './serendipity/serendipity.component';
import { StepComponent } from './step/step.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'serendipity',
        component:SerendipityComponent
      },
      {
        path:'step',
        component:StepComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'/admin/home'
      }
    ]
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    SerendipityComponent,
    StepComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign
  ]
})
export class AdminModule { }

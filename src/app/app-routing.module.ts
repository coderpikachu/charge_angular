import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { HomeComponent } from './home/home.component';

import { FlatComponent } from './components/flat/flat.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { FlatDeleteComponent } from './components/flat-delete/flat-delete.component';
import { FlatEditComponent } from './components/flat-edit/flat-edit.component';

import { DormitoryComponent } from './components/dormitory/dormitory.component';
import { DormitoryAddComponent } from './components/dormitory-add/dormitory-add.component';
import { DormitoryDeleteComponent } from './components/dormitory-delete/dormitory-delete.component';
import { DormitoryEditComponent } from './components/dormitory-edit/dormitory-edit.component';


const routes: Routes = [
  { path: '', component:HomeComponent },

  {path:'dormitory',component:DormitoryComponent},
  {path:'dormitory_add',component:DormitoryAddComponent},
  { path: 'dormitory_edit/:dId', component: DormitoryEditComponent },
  {path:'dormitory_delete/:dId',component:DormitoryDeleteComponent},
  
  {path:'flat',component:FlatComponent},
  {path:'flat_add',component:FlatAddComponent},
  { path: 'flat_edit/:fId', component: FlatEditComponent },
  {path:'flat_delete/:fId',component:FlatDeleteComponent},
  
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:fId', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

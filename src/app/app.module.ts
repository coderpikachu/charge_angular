import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import { HomeComponent } from './home/home.component';
import { DormitoryComponent } from './components/dormitory/dormitory.component';
import { DormitoryAddComponent } from './components/dormitory-add/dormitory-add.component';
import { DormitoryDeleteComponent } from './components/dormitory-delete/dormitory-delete.component';
import { FlatComponent } from './components/flat/flat.component';
import { FlatAddComponent } from './components/flat-add/flat-add.component';
import { FlatDeleteComponent } from './components/flat-delete/flat-delete.component';
import { DormitoryEditComponent } from './components/dormitory-edit/dormitory-edit.component';
import { FlatEditComponent } from './components/flat-edit/flat-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    HomeComponent,
    DormitoryComponent,
    FlatComponent,
    FlatAddComponent,
    FlatDeleteComponent,
    DormitoryAddComponent,
    DormitoryDeleteComponent,
    DormitoryEditComponent,
    FlatEditComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,]
})
export class AppModule { }

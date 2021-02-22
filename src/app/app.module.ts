import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/navBar.component';
import { TopBannerComponent } from './home/topBanner.component';
import { CategoryMenuComponent } from './home/categoryMenu.component';
import { SearchBarComponent } from './home/searchBar.component';
import { CountingComponent } from './counting/counting.component';
import { Lab4Component } from './lab4/lab4.component';
import { ToDoListComponent } from './toDoList/toDoList.component';
import { Home1Component } from './homework3/home1.component';
import { NavBar1Component } from './homework3/navBar1.component';
import { AnnouncementComponent } from './homework3/announcement.component';
import { CategoryMenu1Component } from './homework3/categoryMenu1.component';
import { SearchBar1Component } from './homework3/searchBar1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    TopBannerComponent,
    CategoryMenuComponent,
    SearchBarComponent,
    CountingComponent,
    Lab4Component,
    ToDoListComponent,
    Home1Component,
    NavBar1Component,
    AnnouncementComponent,
    CategoryMenu1Component,
    SearchBar1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

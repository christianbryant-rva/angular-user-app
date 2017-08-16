import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserService } from './user/user.service';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { TestComponent } from './my-tests/test/test.component';
import { TestService } from './my-tests/test/test.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Http
  ],
  // ### <services> Services Go here .. 
  providers: [UserService, TestService],
  // ### </services>
  bootstrap: [AppComponent]
})
export class AppModule { }

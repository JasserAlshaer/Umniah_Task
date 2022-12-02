import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }

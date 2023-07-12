import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardCarsComponent } from './components/card-cars/card-cars.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CarsComponent } from './pages/cars/cars.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardCarsComponent,
    CardServiceComponent,
    FormLoginComponent,
    FormRegisterComponent,
    AddCarComponent,
    CarsComponent,
    HistorialComponent,
    InicioComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    UpdateCarComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ToastrModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

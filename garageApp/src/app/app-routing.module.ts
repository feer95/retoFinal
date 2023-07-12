import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CarsComponent } from './pages/cars/cars.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component';

const routes: Routes = 
[
  {path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'cars', component: CarsComponent},
  {path: 'add-cars', component: AddCarComponent},
  {path: 'update-cars', component: UpdateCarComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AuthGuard } from './guards/auth.guard';
import { ChoosingComponent } from './components/choosing/choosing.component';
import { DoctorregisterComponent } from './components/doctorregister/doctorregister.component';
import { PatientregisterComponent } from './components/patientregister/patientregister.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'doctorregister', component: DoctorregisterComponent},
    {path: 'patientregister', component: PatientregisterComponent},
    {path: '', component: ChoosingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
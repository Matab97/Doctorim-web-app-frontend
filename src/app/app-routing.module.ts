import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AuthGuard } from './guards/auth.guard';
import { ChoosingComponent } from './choosing/choosing.component';
import { DoctorregisterComponent } from './doctorregister/doctorregister.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'statistics', component: StatisticsComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'doctorregister', component: DoctorregisterComponent},
    {path: '', component: ChoosingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
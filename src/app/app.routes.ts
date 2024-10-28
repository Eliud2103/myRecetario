import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UtvcoComponent } from './pages/utvco/utvco.component';
import { PersonalComponent } from './pages/personal/personal.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'utvco',
        component: UtvcoComponent
    },
    {
        path: 'personal',
        component: PersonalComponent
    }
];

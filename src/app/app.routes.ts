import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
    },
    {
        path: 'main',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
    },
    {
        path: 'buttons',
        loadComponent: () => import('./components/buttons/buttons.component').then(m => m.ButtonsComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'main'
    }
];

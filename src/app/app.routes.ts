import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'main',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
    },
    {
        path: 'buttons',
        loadComponent: () => import('./components/button/button.component').then(m => m.ButtonComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'main'
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)
    },
    {
        path: 'main',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
    },
    {
        path: 'buttons',
        loadComponent: () => import('./pages/main/buttons-ui/buttons-ui.component').then(m => m.ButtonsUiComponent)
    },
    {
        path: 'badge',
        loadComponent: () => import('./pages/main/badge-ui/badge-ui.component').then(m => m.BadgeUiComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'main'
    }
];

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
        path: 'buttons-ui',
        loadComponent: () => import('./pages/main/buttons-ui/buttons-ui.component').then(m => m.ButtonsUiComponent)
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'main'
    }
];

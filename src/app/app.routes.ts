import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        pathMatch: 'full',
        loadComponent:() => import("./pages/index/index.component").then(c => c.IndexComponent)
    },
    {
        path:"input",
        loadComponent:() => import("./pages/input/input.component").then(c => c.InputComponent)
    }
];

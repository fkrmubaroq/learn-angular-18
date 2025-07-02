import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        pathMatch: 'full',
        loadComponent:() => import("./pages/index/index.component").then(c => c.IndexComponent)
    },
    {
        path:"form",
        loadComponent:() => import("./pages/form/form.component").then(c => c.FormComponent)
    }
];

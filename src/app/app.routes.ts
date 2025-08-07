import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        pathMatch: 'full',
        loadComponent:() => import("./pages/index/index.component").then(c => c.IndexComponent),
        title: "Home"
    },
    {
        path:"form",
        loadComponent:() => import("./pages/form/form.component").then(c => c.FormComponent),
        title: "Form"
    },
    {
        path:"input-output",
        loadComponent:() => import("./pages/input-output/parent.component").then(c => c.ParentComponent),
        title: "Input & Output"
    },
    {
        path:"query-params",
        loadComponent:() => import("./pages/query-params/query-params.component").then(c => c.QueryParamsComponent),
        title: "Query Params"
    }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        pathMatch: 'full',
        loadComponent:() => import("./pages/index/index.component").then(c => c.IndexComponent)
    },
    {
        path:"todos",
        loadComponent:() => import("./pages/todos/todos.component").then(c => c.TodosComponent)
    }
];

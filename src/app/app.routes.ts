import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

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
    },
    // auth guard canActivate

    {
        path:"auth",
        children:[
            {
                path:"",
                loadComponent:() => import("./pages/auth/auth.component").then(c => c.AuthComponent),
                title: "Auth"
            },
            {
                path:"login",
                loadComponent:() => import("./pages/auth/login/login.component").then(c => c.LoginComponent),
                title: "Login"
            },
            {
                path:"register",
                loadComponent:() => import("./pages/auth/register/register.component").then(c => c.RegisterComponent),
            }
        ]
    },
    {
        path:"auth/admin",
        canActivateChild: [authGuard],
        loadComponent:() => import("./shared/layout/layout.component").then(c => c.LayoutComponent),
        children:[
            {
                path:"dashboard",
                loadComponent:() => import("./pages/auth/admin/dashboard/dashboard.component").then(c => c.DashboardComponent),
                title: "Dashboard"
            }
        ]
    },
    {
        path:"**",
        redirectTo: "/"
    }
];

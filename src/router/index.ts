import React from 'react';
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signup from "../pages/Signup";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    SIGNUP = '/signup',
    HOME = '/',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login},
    {path: RouteNames.SIGNUP, exact: true, component: Signup}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, component: Home}
]
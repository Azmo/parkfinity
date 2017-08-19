import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { PageNotFoundComponent } from './page.not.found';

const appRoutes: Routes = [
    {
        path: 'login', component: LoginComponent,
    }, {
        path: 'Help',
        component: HelpComponent,
        data: { title: 'Help' },
    }, {
        path: '',
        component: HomeComponent,
        data: { title: 'Parkfinity' },
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

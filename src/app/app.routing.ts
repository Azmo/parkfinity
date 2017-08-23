import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth-guard.service';
import { LoginComponent } from './auth/login';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home';
import { LeaseMyBayComponent } from './lease-my-bay/lease-my-bay.component';
import { PageNotFoundComponent } from './page.not.found';
import { RentComponent } from './rent/rent.component';

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
    }, {
        path: 'Lease',
        component: LeaseMyBayComponent,
        data: { title: 'Lease My Bay' },
    }, {
        path: 'Rent',
        component: RentComponent,
        data: { title: 'Rent a Bay' },
    }, {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Parkfinity' },
    },
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

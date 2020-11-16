import { RouterModule, Routes } from '@angular/router'

import { SignupComponent } from './components/user/signup/signup.component';

const APP_ROUTES: Routes = [
    { path: 'user', component: SignupComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }//redirectTo: 'home'
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
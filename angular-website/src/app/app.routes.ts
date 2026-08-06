import { Routes } from '@angular/router';
import { AdminPage } from './admin/admin-page/admin-page';
import { HomePage } from './home/home-page/home-page';
import { UserProfile } from './user/user-profile/user-profile';

export const routes: Routes = [
    {
    path: '',
    component: HomePage,
  },
  {
    path: 'admin',
    component: AdminPage,
  },
  {
    path: 'user/:id',
     component: UserProfile
  }
];

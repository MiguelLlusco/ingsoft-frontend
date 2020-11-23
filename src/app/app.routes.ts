import { RouterModule, Routes } from '@angular/router'

import { SignupComponent } from './components/user/signup/signup.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { OrderDetailComponent } from './components/user/order-detail/order-detail.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { AddproductComponent} from './components/product/addproduct/addproduct.component';
import { AddvoucherComponent} from './components/voucher/addvoucher/addvoucher.component';
<<<<<<< HEAD
import { EditproductComponent} from './components/product/editproduct/editproduct.component';
=======
import { ListvoucherComponent} from './components/voucher/listvoucher/listvoucher.component';
>>>>>>> aeb8c161f6f88aacb2c0c2591aa07815be288a22


const APP_ROUTES: Routes = [
    { path: 'user/profile', component: ProfileComponent },
    { path: 'user/orders', component: OrdersComponent },
    { path: 'user/orders/orderId', component: OrderDetailComponent },
    { path: 'user/edit', component: UserEditComponent },
    { path: 'product/addproduct', component: AddproductComponent},
    { path: 'voucher/addvoucher', component: AddvoucherComponent},
<<<<<<< HEAD
    { path: 'product/editproduct', component: EditproductComponent},
=======
    { path: 'voucher/listvoucher', component: ListvoucherComponent},
>>>>>>> aeb8c161f6f88aacb2c0c2591aa07815be288a22

    { path: '**', pathMatch: 'full', redirectTo: '' }//redirectTo: 'home'
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
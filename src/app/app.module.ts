import { NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routes
import { APP_ROUTING } from "./app.routes";

//Services

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { OrderDetailComponent } from './components/user/order-detail/order-detail.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { MainComponent } from './menu/main/main.component';
import { AddproductComponent } from './components/product/addproduct/addproduct.component';
import { AddvoucherComponent } from './components/voucher/addvoucher/addvoucher.component';
<<<<<<< HEAD
import { EditproductComponent } from './components/product/editproduct/editproduct.component';
=======
import { ListvoucherComponent } from './components/voucher/listvoucher/listvoucher.component';

>>>>>>> aeb8c161f6f88aacb2c0c2591aa07815be288a22

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    OrdersComponent,
    ProfileComponent,
    OrderDetailComponent,
    UserEditComponent,
    MainComponent,
    AddproductComponent,
    AddvoucherComponent,
<<<<<<< HEAD
    EditproductComponent
=======
    ListvoucherComponent
>>>>>>> aeb8c161f6f88aacb2c0c2591aa07815be288a22
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

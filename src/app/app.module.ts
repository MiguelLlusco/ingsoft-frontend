import { NgModule } from '@angular/core';

//Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { UserService } from "./services/user.service";
import { VoucherService } from './components/voucher/listvoucher/voucher.service';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { OrdersComponent } from './components/user/orders/orders.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { OrderDetailComponent } from './components/user/order-detail/order-detail.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { AddproductComponent } from './components/product/addproduct/addproduct.component';
import { AddvoucherComponent } from './components/voucher/addvoucher/addvoucher.component';
import { EditproductComponent } from './components/product/editproduct/editproduct.component';
import { ListvoucherComponent } from './components/voucher/listvoucher/listvoucher.component';
import { CartComponent } from './components/user/cart/cart.component';
import { CatalogueComponent } from './components/category/catalogue/catalogue.component';
import { from } from 'rxjs';
import { PaymentComponent } from './components/user/payment/payment.component';
import { OrderaddComponent } from './components/createOrder/orderadd/orderadd.component';
import { FormComponent } from './components/voucher/listvoucher/form.component';
import { GetproductsComponent } from './components/product/getproducts/getproducts.component';
import { HomeComponent } from './components/home/home.component';
import { ListproductComponent } from './components/product/listproduct/listproduct.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ListproductcategoryComponent } from './components/product/listproductcategory/listproductcategory.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    OrdersComponent,
    ProfileComponent,
    OrderDetailComponent,
    UserEditComponent,
    AddproductComponent,
    AddvoucherComponent,
    EditproductComponent,
    ListvoucherComponent,
    CartComponent,
    CatalogueComponent,
    GetproductsComponent,
    PaymentComponent,
    OrderaddComponent,
    FormComponent,
    HomeComponent,
    ListproductComponent,
    CheckoutComponent,
    ProductDetailComponent,
    ListproductcategoryComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [UserService, VoucherService],
  bootstrap: [AppComponent]
})
export class AppModule { }

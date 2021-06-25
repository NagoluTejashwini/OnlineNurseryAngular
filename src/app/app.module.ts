import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedComponent } from './seed/seed.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ViewSeedComponent } from './view-seed/view-seed.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartChildComponent } from './cart-child/cart-child.component';


const appRoutes:Routes=[
  {path:'seed',component : SeedComponent},
  {path:'admin',component : AdminComponent},
  {path: 'view/:commonname', component: ViewSeedComponent},
  {path:'cart', component: CartComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SeedComponent,
    AllProductsComponent,
    ViewSeedComponent,
    AdminComponent,
    CartComponent,
    CartChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

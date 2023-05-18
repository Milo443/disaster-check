import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AuthModule } from '@auth0/auth0-angular';

// Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListProductsComponent,
    AddEditProductComponent,
    ProgressBarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
    // AuthModule.forRoot({
    //   domain: 'dev-67nzp4wndm0pcbu0.us.auth0.com',
    //   clientId: 'MqpRqTGHt3nFg2UKZ4bhnqSEVhxss3YE',
    //   authorizationParams: {
    //   redirect_uri: window.location.origin
    //   }
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

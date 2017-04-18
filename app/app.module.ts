//This is our main App module that can hold 1 or more components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

//Import the module for Product functionality
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      [
        //order matters, first match wins
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', redirectTo: 'welcome', pathMatch: 'full' }//often used to display a 404 not found page
      ]),
    ProductModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],//which components belong to this module
  bootstrap: [AppComponent]
})
export class AppModule { }

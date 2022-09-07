import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuBarDirective } from './menu-bar.directive';
import { FooterComponent } from './footer/footer.component';
import { HaqqimizdaComponent } from './haqqimizda/haqqimizda.component';
import { RouterModule } from '@angular/router';
import { AnaSehifeComponent } from 'src/app/ana-sehife/ana-sehife.component';
import { XeberlerComponent } from './xeberler/xeberler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnaSehifeComponent,
    MenuBarDirective,
    FooterComponent,
    HaqqimizdaComponent,
    XeberlerComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

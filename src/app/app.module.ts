import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {InputTextModule} from "primeng/inputtext";
import { LoginComponent } from './pages/login/login.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import {GalleriaModule} from "primeng/galleria";
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    NavigatorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    GalleriaModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

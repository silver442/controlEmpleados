import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BienvenidaComponentComponent } from './bienvenida-component/bienvenida-component.component';
import { SalidaComponentComponent } from './salida-component/salida-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  
  {path:'', component:LoginComponentComponent},
  {path:'bienvenida', component:BienvenidaComponentComponent},
  {path:'salida', component:SalidaComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    BienvenidaComponentComponent,
    SalidaComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

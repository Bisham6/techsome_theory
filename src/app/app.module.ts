import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ServicesComponent } from './pages/services/services.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ContectComponent } from './pages/contect/contect.component';
import { SharedComponentModuleModule } from './Shared Component/shared-component-module/shared-component-module.module';
import { HeaderComponent } from './Shared Component/header/header.component';
import { FooterComponent } from './Shared Component/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ServicesComponent,
    SolutionsComponent,
    ContectComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

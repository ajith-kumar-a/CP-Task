import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirevitiveComponent } from './components/direvitive/direvitive.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToggleImgTask1Component } from './Task/toggle-img-task1/toggle-img-task1.component';
import { MyPipeComponent } from './components/my-pipe/my-pipe.component';
import { CubePipe } from './shared/customepipe/cube.pipe';
import { SquarePipe } from './shared/customepipe/square.pipe';
import { AreaOfCirclePipe } from './shared/customepipe/area-of-circle.pipe';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDashboardComponent } from './curd/product-dashboard/product-dashboard.component';
import { ProductAddComponent } from './crud/product-add/product-add.component';
import { ProductAdddComponent } from './curd/product-addd/product-addd.component';
import { ProductUpdateComponent } from './curd/product-update/product-update.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LogInComponent } from './components/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirevitiveComponent,
    ToggleImgTask1Component,
    MyPipeComponent,
    CubePipe,
    SquarePipe,
    AreaOfCirclePipe,
    EmpDetailComponent,
    AngFormComponent,
    RtfComponent,
    UtdfComponent,
    PageNotFoundComponent,
    MainDashboardComponent,
    NavComponent,
    FooterComponent,
    BreakFastComponent,
    ProductDashboardComponent,
    ProductAddComponent,
    ProductAdddComponent,
    ProductUpdateComponent,
    AngularMaterialComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

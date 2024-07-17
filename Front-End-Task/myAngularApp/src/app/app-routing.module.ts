import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirevitiveComponent } from './components/direvitive/direvitive.component';
import { ToggleImgTask1Component } from './Task/toggle-img-task1/toggle-img-task1.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EmpDetailComponent } from './components/emp-detail/emp-detail.component';
import { AngFormComponent } from './components/ang-form/ang-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { BreakFastComponent } from './components/break-fast/break-fast.component';
import { ProductDashboardComponent } from './curd/product-dashboard/product-dashboard.component';
import { ProductAddComponent } from './crud/product-add/product-add.component';
import { ProductAdddComponent } from './curd/product-addd/product-addd.component';
import { ProductUpdateComponent } from './curd/product-update/product-update.component';
import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { authGuard } from './shared/Guards/auth.guard';

const routes: Routes = [
  // 2. default routing

  {path:"",component:LogInComponent},
  {path:"login",component:LogInComponent},
  {path:"task",component:ToggleImgTask1Component},


  {path:"maindb",component:MainDashboardComponent, canActivate:[authGuard], children:[

  // {path:"",component:DataBindingComponent},

  // 3. redirect routing
  {path:"",redirectTo:"databinding",pathMatch:"full"},

  // 1. naming routing
  {path:"databinding",component:DataBindingComponent},
  {path:"direvitive",component:DirevitiveComponent},
  {path:"task",component:ToggleImgTask1Component},
  {path:"emp",component:EmpDetailComponent},
    {path:"bf",component:BreakFastComponent},

  // 4. parametrize routing
 
  {path:"emp/:id",component:EmpDetailComponent},
  {path:"emp",component:EmpDetailComponent},
  {path:"productdash",component:ProductDashboardComponent},
  {path:"productAdd",component:ProductAdddComponent},
  {path:"productUpdate/:id",component:ProductUpdateComponent},
  {path:"angMaterial",component:AngularMaterialComponent},

  //5. child routing 
  {path:"angform",component:AngFormComponent,children:[
    {path:"",component:RtfComponent},
    {path:"rtf",component:RtfComponent},
    {path:"utdf",component:UtdfComponent}
  ]}

  ]},

  // wildcard routing 
  {path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

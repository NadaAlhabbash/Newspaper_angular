import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/main_page/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { BusinessComponent } from './components/business/business.component';
import { HealthComponent } from './components/health/health.component';
import { DesignComponent } from './components/design/design.component';
import { SportComponent } from './components/sport/sport.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'categories', component: CategoriesComponent},
  { path: 'politics', component: PoliticsComponent},
  { path: 'business', component: BusinessComponent},
  { path: 'health', component: HealthComponent},
  { path: 'design', component: DesignComponent},
  { path: 'sport', component: SportComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

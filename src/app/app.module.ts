import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/main_page/home.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { TrendsNewsComponent } from './components/home/trends-news/trends-news.component';
import { MiddleCardComponent } from './components/home/middle-card/middle-card.component';
import { SiteSectionComponent } from './components/home/site-section/site-section.component';
import { RecentNewsComponent } from './components/home/recent-news/recent-news.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PoliticsComponent } from './components/politics/politics.component';
import { BusinessComponent } from './components/business/business.component';
import { HealthComponent } from './components/health/health.component';
import { DesignComponent } from './components/design/design.component';
import { SportComponent } from './components/sport/sport.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    TrendsNewsComponent,
    MiddleCardComponent,
    SiteSectionComponent,
    RecentNewsComponent,
    FooterComponent,
    CategoriesComponent,
    NavbarComponent,
    PoliticsComponent,
    BusinessComponent,
    HealthComponent,
    DesignComponent,
    SportComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

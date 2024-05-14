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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    TrendsNewsComponent,
    MiddleCardComponent,
    SiteSectionComponent,
    RecentNewsComponent
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

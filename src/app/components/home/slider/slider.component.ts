import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../../services/news/news-service.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  articles: Article[] = [];
    constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines().subscribe({
      next: (response: Article[]) => {
        this.articles = response.filter(article => article.urlToImage); // Filter out articles without an image
        console.log('Top headlines with images:', this.articles);
      },
      error: (error: any) => {
        console.error('Error fetching top headlines', error);
      }
    });
  }

}




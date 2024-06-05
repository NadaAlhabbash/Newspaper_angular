import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../../services/news/news-service.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-trends-news',
  templateUrl: './trends-news.component.html',
  styleUrl: './trends-news.component.css'
})
export class TrendsNewsComponent implements OnInit {

  editorsPickArticles: Article[] = [];
  trendingArticles: Article[] = [];

  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
       this.fetchEditorsPick();
    this.fetchTrending();
  }

  fetchEditorsPick(): void {
    this.newsService.getEditorsPick().subscribe({
      next: (response: Article[]) => {
        this.editorsPickArticles = response.filter(article => article.urlToImage); // Filter out articles without an image
        console.log('Editor\'s Picks:', this.editorsPickArticles);
      },
      error: (error: any) => {
        console.error('Error fetching Editor\'s Picks', error);
      }
    });
  }

  fetchTrending(): void {
    this.newsService.getTrending().subscribe({
      next: (response: Article[]) => {
        this.trendingArticles = response.slice(0, 3); // Only show the top 3 trending articles
        console.log('Trending articles:', this.trendingArticles);
      },
      error: (error: any) => {
        console.error('Error fetching trending articles', error);
      }
    });
  }

}

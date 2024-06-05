import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../../services/news/news-service.service';
import { Article } from '../../../models/article';

@Component({
  selector: 'app-middle-card',
  templateUrl: './middle-card.component.html',
  styleUrl: './middle-card.component.css'
})
export class MiddleCardComponent implements OnInit {

  article: Article | undefined;

  constructor(private newsService: NewsServiceService) { }

  ngOnInit(): void {
      this.newsService.getEditorsPick().subscribe((articles) => {
      if (articles.length > 0) {
        this.article = articles[5];
      }
    });
  }

}

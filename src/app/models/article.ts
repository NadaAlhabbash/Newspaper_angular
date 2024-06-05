export interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

export interface NewsResponse {
  articles: Article[];
}

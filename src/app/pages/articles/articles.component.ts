import { Component, OnInit } from '@angular/core';
import { ArticleListItemService } from 'src/app/service/article-list-item.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private service: ArticleListItemService) { }
  articleData: any;

  ngOnInit(): void {
    this.articleData = this.service.articleListItem;
  }

}

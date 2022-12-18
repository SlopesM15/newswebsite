import { Component, OnInit } from '@angular/core';
import { ArticleListItemService } from 'src/app/service/article-list-item.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private service: ArticleListItemService) { }
  articleData: any;
  ngOnInit(): void {
    this.articleData = this.service.articleListItem;
  }

}

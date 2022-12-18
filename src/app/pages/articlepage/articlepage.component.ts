import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleListItemService } from 'src/app/service/article-list-item.service';

@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:ArticleListItemService) { }
  getArticleId:any;
  articleData:any;

  ngOnInit(): void {
    this.getArticleId = this.param.snapshot.paramMap.get('id');
    console.log(this.getArticleId,'getarticle');
    if(this.getArticleId){
     this.articleData= this.service.articleListItem.filter((value)=>{
        return value.id == this.getArticleId;
      })
    }
  }

}

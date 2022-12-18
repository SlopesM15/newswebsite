import { TestBed } from '@angular/core/testing';

import { ArticleListItemService } from './article-list-item.service';

describe('ArticleListItemService', () => {
  let service: ArticleListItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleListItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

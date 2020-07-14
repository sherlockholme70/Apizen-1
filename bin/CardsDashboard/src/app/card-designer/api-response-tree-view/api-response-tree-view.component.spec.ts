import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponseTreeViewComponent } from './api-response-tree-view.component';

describe('ApiResponseTreeViewComponent', () => {
  let component: ApiResponseTreeViewComponent;
  let fixture: ComponentFixture<ApiResponseTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiResponseTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiResponseTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

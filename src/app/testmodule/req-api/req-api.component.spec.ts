import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqAPIComponent } from './req-api.component';

describe('ReqAPIComponent', () => {
  let component: ReqAPIComponent;
  let fixture: ComponentFixture<ReqAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

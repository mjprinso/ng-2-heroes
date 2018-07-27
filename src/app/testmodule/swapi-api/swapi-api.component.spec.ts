import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiAPIComponent } from './swapi-api.component';

describe('SwapiAPIComponent', () => {
  let component: SwapiAPIComponent;
  let fixture: ComponentFixture<SwapiAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrysComponent } from './trys.component';

describe('TrysComponent', () => {
  let component: TrysComponent;
  let fixture: ComponentFixture<TrysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

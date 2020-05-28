import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compare2ResultComponent } from './compare2-result.component';

describe('Compare2ResultComponent', () => {
  let component: Compare2ResultComponent;
  let fixture: ComponentFixture<Compare2ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compare2ResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compare2ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

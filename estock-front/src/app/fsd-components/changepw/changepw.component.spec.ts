import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwComponent } from './changepw.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ChangepwComponent', () => {
  let component: ChangepwComponent;
  let fixture: ComponentFixture<ChangepwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,ReactiveFormsModule
      ],
      declarations: [ ChangepwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTermComponent } from './input-term.component';

describe('InputTermComponent', () => {
  let component: InputTermComponent;
  let fixture: ComponentFixture<InputTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

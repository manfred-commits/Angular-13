import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreDueComponent } from './tre-due.component';

describe('TreDueComponent', () => {
  let component: TreDueComponent;
  let fixture: ComponentFixture<TreDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

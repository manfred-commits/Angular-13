import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuattroComponent } from './quattro.component';

describe('QuattroComponent', () => {
  let component: QuattroComponent;
  let fixture: ComponentFixture<QuattroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuattroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuattroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

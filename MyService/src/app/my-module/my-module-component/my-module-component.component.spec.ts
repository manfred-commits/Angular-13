import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModuleComponentComponent } from './my-module-component.component';

describe('MyModuleComponentComponent', () => {
  let component: MyModuleComponentComponent;
  let fixture: ComponentFixture<MyModuleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyModuleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModuleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

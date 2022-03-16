import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkComponentComponent } from './network-component.component';

describe('NetworkComponentComponent', () => {
  let component: NetworkComponentComponent;
  let fixture: ComponentFixture<NetworkComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

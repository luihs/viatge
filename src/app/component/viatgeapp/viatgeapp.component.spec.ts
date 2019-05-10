import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgeappComponent } from './viatgeapp.component';

describe('ViatgeappComponent', () => {
  let component: ViatgeappComponent;
  let fixture: ComponentFixture<ViatgeappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViatgeappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViatgeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

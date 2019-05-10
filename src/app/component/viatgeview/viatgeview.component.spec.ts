import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgeviewComponent } from './viatgeview.component';

describe('ViatgeviewComponent', () => {
  let component: ViatgeviewComponent;
  let fixture: ComponentFixture<ViatgeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViatgeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViatgeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgeplusComponent } from './viatgeplus.component';

describe('ViatgeplusComponent', () => {
  let component: ViatgeplusComponent;
  let fixture: ComponentFixture<ViatgeplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViatgeplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViatgeplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

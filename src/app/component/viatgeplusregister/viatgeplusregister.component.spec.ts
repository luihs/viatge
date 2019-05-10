import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViatgeplusregisterComponent } from './viatgeplusregister.component';

describe('ViatgeplusregisterComponent', () => {
  let component: ViatgeplusregisterComponent;
  let fixture: ComponentFixture<ViatgeplusregisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViatgeplusregisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViatgeplusregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

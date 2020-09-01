import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiteComponent } from './kite.component';

describe('KiteComponent', () => {
  let component: KiteComponent;
  let fixture: ComponentFixture<KiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

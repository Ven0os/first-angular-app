import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LireJsonComponent } from './lire-json.component';

describe('LireJsonComponent', () => {
  let component: LireJsonComponent;
  let fixture: ComponentFixture<LireJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LireJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LireJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

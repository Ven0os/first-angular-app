import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopersonneComponent } from './infopersonne.component';

describe('InfopersonneComponent', () => {
  let component: InfopersonneComponent;
  let fixture: ComponentFixture<InfopersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfopersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfopersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

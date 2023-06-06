import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLsymComponent } from './info-lsym.component';

describe('InfoLsymComponent', () => {
  let component: InfoLsymComponent;
  let fixture: ComponentFixture<InfoLsymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLsymComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLsymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

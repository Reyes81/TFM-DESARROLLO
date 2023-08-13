import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasFechaComponent } from './noticias-fecha.component';

describe('NoticiasFechaComponent', () => {
  let component: NoticiasFechaComponent;
  let fixture: ComponentFixture<NoticiasFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasFechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

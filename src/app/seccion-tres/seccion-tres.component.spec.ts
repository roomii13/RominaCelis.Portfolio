import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTresComponent } from './seccion-tres.component';

describe('SeccionTresComponent', () => {
  let component: SeccionTresComponent;
  let fixture: ComponentFixture<SeccionTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionTresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

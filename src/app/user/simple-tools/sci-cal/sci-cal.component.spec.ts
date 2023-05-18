import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SciCalComponent } from './sci-cal.component';

describe('SciCalComponent', () => {
  let component: SciCalComponent;
  let fixture: ComponentFixture<SciCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SciCalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SciCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

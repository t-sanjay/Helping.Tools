import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldRankingComponent } from './world-ranking.component';

describe('WorldRankingComponent', () => {
  let component: WorldRankingComponent;
  let fixture: ComponentFixture<WorldRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorldRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

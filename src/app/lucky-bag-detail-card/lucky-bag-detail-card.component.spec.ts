import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyBagDetailCardComponent } from './lucky-bag-detail-card.component';

describe('LuckyBagDetailCardComponent', () => {
  let component: LuckyBagDetailCardComponent;
  let fixture: ComponentFixture<LuckyBagDetailCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuckyBagDetailCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyBagDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

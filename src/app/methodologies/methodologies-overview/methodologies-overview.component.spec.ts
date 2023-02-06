import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodologiesOverviewComponent } from './methodologies-overview.component';

describe('MethodologiesOverviewComponent', () => {
  let component: MethodologiesOverviewComponent;
  let fixture: ComponentFixture<MethodologiesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodologiesOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodologiesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitRequestDetailComponent } from './exit-request-detail.component';

describe('ExitRequestDetailComponent', () => {
  let component: ExitRequestDetailComponent;
  let fixture: ComponentFixture<ExitRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitRequestDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

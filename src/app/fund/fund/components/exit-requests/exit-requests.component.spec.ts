import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitRequestsComponent } from './exit-requests.component';

describe('ExitRequestsComponent', () => {
  let component: ExitRequestsComponent;
  let fixture: ComponentFixture<ExitRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

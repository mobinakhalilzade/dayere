import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPictureComponent } from './fund-picture.component';

describe('FundPictureComponent', () => {
  let component: FundPictureComponent;
  let fixture: ComponentFixture<FundPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

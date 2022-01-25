import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSocialFundComponent } from './new-social-fund.component';

describe('NewFundComponent', () => {
  let component: NewSocialFundComponent;
  let fixture: ComponentFixture<NewSocialFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSocialFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSocialFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

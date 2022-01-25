import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanSuggestionsComponent } from './loan-suggestions.component';

describe('LoanSuggestionsComponent', () => {
  let component: LoanSuggestionsComponent;
  let fixture: ComponentFixture<LoanSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanSuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMemberVotingComponent } from './new-member-voting.component';

describe('MemberVotingComponent', () => {
  let component: NewMemberVotingComponent;
  let fixture: ComponentFixture<NewMemberVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMemberVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMemberVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

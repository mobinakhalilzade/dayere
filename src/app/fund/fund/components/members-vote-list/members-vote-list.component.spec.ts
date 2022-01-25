import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersVoteListComponent } from './members-vote-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {LoanServices} from '../../../../services/loan.service';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Overlay} from '@angular/cdk/overlay';
import {SocialFundServices} from '../../../../services/socialFund.service';

describe('MembersListComponent', () => {
  let component: MembersVoteListComponent;
  let fixture: ComponentFixture<MembersVoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersVoteListComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[SocialFundServices,CustomErrorHandlerService,MatSnackBar,Overlay]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersVoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

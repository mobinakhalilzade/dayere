import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotersListComponent } from './voters-list.component';
import {VoteResultPipe} from '../../../../shared/pipes/voteResult/vote-result.pipe';

describe('VotersListComponent', () => {
  let component: VotersListComponent;
  let fixture: ComponentFixture<VotersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotersListComponent ,VoteResultPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

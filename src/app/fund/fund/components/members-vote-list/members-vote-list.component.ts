import {Component, OnInit} from '@angular/core';
import {GetAllMembersDto, GetAllMembersInput} from '../../../../interfaces/socialFund.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {IGetAllMembers, SocialFundServices} from '../../../../services/socialFund.service';
import {HttpClient} from '@angular/common/http';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-vote-list.component.html',
  styleUrls: ['./members-vote-list.component.css']
})
export class MembersVoteListComponent implements OnInit, IGetAllMembers {

  membersVoteList: any = [];
  positiveVotes: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private socialFundServices: SocialFundServices,
    public customErrorHandler: CustomErrorHandlerService,
    private http: HttpClient
  ) {
    this.socialFundServices = new SocialFundServices(this.http, this.customErrorHandler);
  }

  ngOnInit(): void {
    const fundId = this.route.snapshot.paramMap.get('id');
    const command: GetAllMembersInput = {
      fundId: Number(fundId)
    };
    this.socialFundServices.getAllMembers(command, this);
  }

  onSuccessGetAllMembers(data: GetAllMembersDto[]) {
    this.membersVoteList = data;
    for (let i of this.membersVoteList) {
      if (i.memberState == 180101 || i.memberState == 180104) {
        this.positiveVotes++;
      }
    }
  }

}

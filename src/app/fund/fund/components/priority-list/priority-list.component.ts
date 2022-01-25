import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IGetAllMembers, SocialFundServices} from '../../../../services/socialFund.service';
import {HttpClient} from '@angular/common/http';
import {GetAllMembersDto, GetAllMembersInput} from '../../../../interfaces/socialFund.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-priority-list',
  templateUrl: './priority-list.component.html',
  styleUrls: ['./priority-list.component.css']
})
export class PriorityListComponent implements OnInit, IGetAllMembers {
  priorityList: GetAllMembersDto[] = [];

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
    this.priorityList = data;
  }


}

import {Component, OnInit} from '@angular/core';
import {ChartType, ChartOptions} from 'chart.js';
import {SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip} from 'ng2-charts';
import {HttpClient} from '@angular/common/http';
import {IGetFundDetail, IGetGuaranteeDetail, SocialFundServices} from '../../../../services/socialFund.service';
import {ActivatedRoute, Router} from '@angular/router';
import {
  GetFundDetailDto,
  GetFundDetailInput,
  GetGuaranteeDetailDto,
  GetGuaranteeDetailInput
} from '../../../../interfaces/socialFund.interface';
import {CustomErrorHandlerService} from '../../../../services/custom-error-handler.service';

@Component({
  selector: 'app-guarantees-detail',
  templateUrl: './guarantees-detail.component.html',
  styleUrls: ['./guarantees-detail.component.css']
})
export class GuaranteesDetailComponent implements OnInit, IGetGuaranteeDetail, IGetFundDetail {

  fundId: any;
  fundDetail!: GetFundDetailDto;
  showDetail: boolean = false;
  guaranteeDetail: any;
  sheetInfo: any;

  // chart
  chartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 75
  };
  chartLabelsPersonToOthers: Label[] = [['ضمانت شما به فرد'], ['کل']];
  chartLabelsOthersToPerson: Label[] = [['ضمانت فرد به شما'], ['کل']];
  chartDataPersonToOthers: SingleDataSet = [0, 100];
  chartDataOthersToPerson: SingleDataSet = [0, 100];
  chartType: ChartType = 'doughnut';
  chartLegend = false;
  chartColorsRed: Array<any> = [{backgroundColor: ['#CC3300']}];
  chartColorsSuccess: Array<any> = [{backgroundColor: ['#2EB473']}];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private socialFundService: SocialFundServices,
    public customErrorHandler: CustomErrorHandlerService,
  ) {
    this.socialFundService = new SocialFundServices(this.http, this.customErrorHandler);
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }


  ngOnInit(): void {
    //get id from url to get fund guarantees detail
    this.fundId = this.route.snapshot.paramMap.get('id');
    const command: GetGuaranteeDetailInput = {
      fundId: (Number(this.fundId))
    };
    this.socialFundService.getGuaranteeDetail(command, this);
    //get id from url to get fund detail
    const input: GetFundDetailInput = {
      fundId: (Number(this.fundId))
    };
    this.socialFundService.getFundDetail(input, this);

  }

  //show fund detail data
  onSuccessGetFundDetail(data: GetFundDetailDto) {
    this.fundDetail = data;
  }

  //show guarantees detail data
  onSuccessGetGuaranteeDetail(data: GetGuaranteeDetailDto) {
    this.guaranteeDetail = data;
  }

  //calculate loan guarantee detail
  loanGuaranteeDetailToPerson(id: number) {
    this.sheetInfo = this.guaranteeDetail.loanGuaranteeDetails.find((x: any) => x.memberId == id);
    let data = this.sheetInfo;

    let guaranteePersonToOthers = data.totalYourGuarantee - data.remainYourGuarantee;
    this.chartDataPersonToOthers = [guaranteePersonToOthers, 100 - guaranteePersonToOthers];

    let guaranteeOthersToPerson = data.totalGuaranteeOthers - data.remainGuaranteeOthers;
    this.chartDataOthersToPerson = [guaranteeOthersToPerson, 100 - guaranteeOthersToPerson];
  }


  clickOutside() {
    this.showDetail = false;
  }

}

import {installments, loanGuarantees} from './loan.interface';
import {FundTypeEnum, InstallmentStateEnum, LoanStateEnum} from './general.interface';

export interface GetBaseInfoDto {
  minLoanAmount: number;
  maxLoanAmount: number;
  minInstallmentCount: number;
  maxInstallmentCount: number;
  freeLendingCalendars: freeLendingCalendars;
}

export interface freeLendingCalendars {
  shamsiYear: number;
  shamsiMonth: number;
  shamsiMonthName: string;
}

export interface CalculateInput {
  loanAmount: number;
  installmentsCount: number;
  fundsId: [number];
  shamsiYear: number;
  shamsiMonth: number;
}

export interface CalculateDto {
  loanAmount: number;
  installmentsCount: number;
  installmentAmount: number;
  loanFees: string;
  shamsiYear: number;
  shamsiMonth: number;
  permissionApplyLoan: boolean;
  loanGuarantees: loanGuarantees [];
}

export interface ReserveInput {
  loanAmount: number;
  installmentsCount: number;
  fundsId: [number];
  shamsiYear: number;
  shamsiMonth: number;
}

export interface CancelReserveInput {
  loanNumber: string;
}

export interface ConfirmReserveInput {
  loanNumber: string;
}

export interface GetAllInput {
  fundId: number;
}

export interface GetAllSocialLoanDto {
  loanId: number;
  fundId: number;
  loanNumber: string;
  amount: number;
  remainAmount: number;
  installmentsCount: number;
  installmentsRemainCount: number;
  installmentLastState: InstallmentStateEnum;
  loanState: LoanStateEnum;
  feesAmount: number;
  interestAmount: number;
  requestDate: string;
  confirmDate: string;
  startRepayDate: string;
  loanGuarantees: loanGuarantees [];
  installments: installments [];
  memberStockAmount: number;
  memberName: string;
  memberSurname: string;
  memberImageUrl: string;
}

export interface GetAllRequestInput {
  fundId: number;
}

export interface GetAllRequestSocialLoanDto {
  loanId: number;
  fundId: number;
  fundType: FundTypeEnum;
  loanNumber: string;
  memberFullName: string;
  memberId: number;
  memberImageUrl: string;
  loanAmount: number;
  installmentsCount: number;
  installmentAmount: number;
  isReady: boolean;
  requestDate: string;
  loanPayDate: string;
  feesPercent: number;
  loanGuarantees: loanGuarantees[];
}

export interface RejectRequestInput {
  fundId: number;
  loanId: number;
  reasonReject: number;
}

export interface ConfirmRequestInput {
  fundId: number;
  loanId: number;
}


import {FundTypeEnum, InstallmentStateEnum, LoanStateEnum, SocialLoanStateEnum} from './general.interface';

export interface GetAllLoanDto {
  loanId: number;
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
  loanGuarantees: loanGuarantees[];
  installments: installments[];
}

export interface loanGuarantees {
  loanGuaranteeId: number;
  description: string;
  amount: number;
  guarantorName: string;
  guarantorImageUrl: string;
  socialLoanState: 190201;
  answerDate: string;
}

export interface installments {
  dueDate: string;
  amount: number;
  feesAmount: number;
  interestAmount: number;
  mainAmount: number;
  installmentState: InstallmentStateEnum;
  paymentDate: string;
  installmentNumber: number;
  installmentId: number;
}

export interface GetAllRequestLoanDto {
  fundId: number;
  fundType: FundTypeEnum;
  loanNumber: string;
  memberFullName: string;
  memberId: number;
  memberImageUrl: string;
  loanAmount: number;
  installmentsCount: number;
  isReady: boolean;
  requestDate: string;
  loanPayDate: string;
  feesPercent: number;
  loanGuarantees: loanGuaranteesRequest [];
}

export interface loanGuaranteesRequest {
  loanGuaranteeId: number;
  description: string;
  amount: number;
  guarantorName: string;
  guarantorImageUrl: string;
  socialLoanState: SocialLoanStateEnum;
  answerDate: string;
}

export interface GetRepayInfoInput {
  installmentNumbers: [];
  loanNumber: string;
  fundType: FundTypeEnum;
}

export interface GetRepayInfoDto {
  totalAmount: number;
}

export interface RepayInput {
  installmentNumbers: [];
  loanNumber: string;
  fundType: FundTypeEnum;
}



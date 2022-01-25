import {
  FundLotteryTypeEnum,
  FundTypeEnum,
  InstallmentStateEnum,
  MemberStateEnum,
  SocialFundStateEnum,
  SocialLoanStateEnum
} from './general.interface';

export interface InfoNewFundDto {
  isPermit: boolean;
  minContribution: number;
  maxContribution: number;
  minPersonCount: number;
  maxPersonCount: number;
  depositAmountSuggestions: [];
  adminInterestSuggestions: [];
  installmentCountSuggestions: [];
}

export interface CreateNewFundInput {
  name: string;
  adminRequestContribution: number;
  minContribution: number;
  maxContribution: number;
  minLoanAmount: number;
  maxLoanAmount: number;
  turnRatingsType: FundLotteryTypeEnum;
  countDaysVoting: number;
  adminFirstPriority: boolean;
  reserveAuto: boolean;
  accessAdminFundAccountPermission: boolean;
  adminPercent: number;
  sponsorPercent: number;
  customersId: [];
  accountId: number;
  minInstallment: number;
  maxInstallment: number;
  minMemberVoted: number;
}

export interface GetAllMembersInput {
  fundId: number;
}

export interface GetAllMembersDto {
  phoneNumber: string;
  stockAmount: number;
  priorityDate: string;
  fundId: number;
  customerId: number;
  accountId: number;
  memberState: MemberStateEnum;
  name: string;
  surname: string;
  imageUrl: string;
  memberId: number;
}

export interface GetFundDetailInput {
  fundId: number;
}

export interface GetFundDetailDto {
  minDepositAmount: number;
  maxDepositAmount: number;
  minLoanAmount: number;
  maxLoanAmount: number;
  isAccessAdminFundAccount: boolean;
  lotteryDate: string;
  socialFundStatusType: SocialFundStateEnum;
  socialFundPriorityType: FundLotteryTypeEnum;
  minLoanInstallment: number;
  maxLoanInstallment: number;
  balanceAmount: number;
  loanTotalAmount: number;
  loanRepaidAmount: number;
  loanRemainAmount: number;
  creationTime: string;
  adminImageUrl: string;
  membersCount: number;
  memberState: MemberStateEnum;
  isAdminFirstPriority: boolean;
  isAutoReserve: boolean;
  isLotteryDone: boolean;
  stockAmount: number;
  voteExpireDate: string;
  voteRemainExpireDate: number;
  defaultDepositAmount: number;
  adminPercent: number;
  minMemberVoted: number;
  memberId: number;
  fundId: number;
  name: string;
  imageUrl: string;
  adminName: string;
  isAdmin: boolean;
  type: FundTypeEnum;
}

export interface GetLendingCalendarInput {
  fundId: number;
}

export interface GetLendingCalendarDto {
  shamsiYear: string;
  shamsiMonth: string;
  shamsiMonthName: string;
  isCurrentDate: boolean;
  predictedAmount: number;
  totalReservedAmount: number;
  lendingFreeAmount: number;
  loanRequests: loanRequests[];
  loanInstallments: loanInstallments[];
  fundId: number;
}

export interface loanRequests {
  fundId: number;
  loanReserveId: number;
  memberFullName: string;
  memberId: number;
  memberImageUrl: string;
  amount: number;
  installmentsCountRequested: number;
  requestDateTime: string;
  isReady: boolean;
  status: SocialLoanStateEnum;
}

export interface loanInstallments {
  memberFullName: string;
  memberId: number;
  memberImageUrl: string;
  dueDate: string;
  amount: number;
  feeAmount: number;
  interestAmount: number;
  mainAmount: number;
  installmentState: InstallmentStateEnum;
  paymentDate: string;
  installmentNumber: number;
  installmentId: number;
}

export interface VoteNewFundInput {
  fundId: number;
  isAgree: boolean;
  amount: number;
}

export interface CloseCreateNewFundInput {
  fundId: number;
  reasonId: number;
}

export interface GetGuaranteeDetailInput {
  fundId: number;
}

export interface GetGuaranteeDetailDto {
  sumTotalYourGuarantee: number;
  sumRemainYourGuarantee: number;
  sumTotalGuaranteeOthers: number;
  sumRemainGuaranteeOthers: number;
  personCountYourGuarantee: number;
  personCountGuaranteeOthers: number;
  loanGuaranteeDetails: loanGuaranteeDetails;
}

export interface loanGuaranteeDetails {
  memberState: MemberStateEnum;
  memberId: number;
  memberFullName: string;
  memberImageUrl: string;
  totalYourGuarantee: number;
  totalGuaranteeOthers: number;
  remainYourGuarantee: number;
  remainGuaranteeOthers: number;
}

export interface SetAutoLotteryInput {
  fundId: number;
}



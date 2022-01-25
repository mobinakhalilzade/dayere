export class DataResponse<T> {
  result!: T;
  targetUrl: string = '';
  success: boolean = false;
  error: ErrorResponse = new ErrorResponse();
  unAuthorizedRequest: boolean = true;
  __abp: boolean = false;

}

export class ErrorResponse {
  code: number = 0;
  message: string = '';
  details: string = '';
}

// نوع احراز هویت کاربر
export enum UserAuthTypeEnum {
  // از طریق فینوتک
  Finnotech = 110101
}

// فعالیت های کاربر
export enum UserActivityTypeEnum {
  // رای گیری صندوق اجتماعی جدید با موفقیت انجام شد
  SocialFundVoteCreated = 110201,

  // به صندوق اجتماعی جدید دعوت شدید
  SocialFundYouInvited = 110202,

  // صندوق اجتماعی با موفقیت ایجاد شد
  SocialFundCreated = 110203,

  // صندوق اجتماعی ایجاد نشد
  SocialFundNotCreated = 110204,

  //  به صندوق اجتماعی پیوستید
  SocialFundYouJoined = 110205,

  // به صندوق اجتماعی رای مثبت دادید
  SocialFundVoteCreateYouVoted = 110206,

  // به صندوق اجتماعی رای منفی دادید
  SocialFundVoteCreateYouVeto = 110207,

  // در حال خروج از صندوق اجتماعی هستید
  SocialFundYouExiting = 110208
}


// نوع حساب
export enum AccountTypeEnum {

  //  کیف پول
  Wallet = 120101,

  //  بانکی مشتری
  CustomerBank = 120102,

  //  استخر
  Pool = 120103,

  //   بلاک استخر
  PoolBlock = 120104,

  //  کارمزد و سود
  PoolInterest = 120105,

  //  بانکی صندوق
  FundBank = 120106,

  //  دفترچه مشتری
  CustomerDeposit = 120107,

  //  اصلی صندوق
  Fund = 120108
}

// نوع کلاینت سامانه
export enum SystemClientTypeEnum {
  // اندروید
  Android = 130401,

  // iOS
  Ios = 130402
}

// نوع تغییرات سامانه
export enum SystemChangeTypeEnum {
  // ویژگی جدید
  NewFeature = 130501,

  // رفع باگ
  FixBug = 130502
}

// نوع شخصیت مشتری
export enum CustomerTypeEnum {
  // حقیقی
  Real = 140101,

  // حقوقی
  Legal = 140102
}

// انواع صندوق ها
export enum FundTypeEnum {
  // خانوادگی
  Family = 150101,

  // اجتماعی
  Social = 150102,

  // سازمانی
  Organization = 150103
}

// انواع قرعه کشی در صندوق
export enum FundLotteryTypeEnum {
  // اتوماتیک
  Auto = 150201,

  // دستی
  Manual = 150202
}

// انواع وضعیت های صندوق اجتماعی
export enum SocialFundStateEnum {
  // صندوق درحال رای گیری است
  Voting = 150301,

  // صندوق فعال است
  Active = 150302,

  // صندوق تشکیل نشد
  Canceled = 150303,

  // صندوق ایجاد شده در انتظار نویت دهی
  WaitLottery = 150304
}

// نوع تراکنش
export enum TransactionTypeEnum {
  // واریز به حساب
  Deposit = 160101,

  // برداشت از حساب
  Withdraw = 160102
}

// نوع وضعیت عضو
export enum MemberStateEnum {
  // رای مثبت
  Voted = 180101,

  // رای منفی
  Veto = 180102,

  // بدون رای
  VoteLess = 180103,

  // عضو فعال
  Joined = 180104,

  // عضو خارج شده
  Exited = 180105,

  // عضو در حال خروج
  Exiting = 180106
}

// وضعیت وام
export enum LoanStateEnum {
  // در حال پردازش
  InProgress = 190101,

  // بسته شده
  Closed = 190102,
}

// وضعیت وام اجتماعی
export enum SocialLoanStateEnum {
  // ثبت شده
  ReserveUserSubmit = 190201,

  // تائید شده مدیر
  ReserveAdminAccept = 190202,

  // رد شده مدیر
  ReserveAdminFailed = 190203,

  //  تائید شده مدیر و رد شده کاربر
  ReserveAdminAcceptUserFailed = 190204,

  //  رد شده کاربر قبل از تائید
  ReserveUserFailed = 190205,

  // تائید شده مدیر و دریافت شده توسط کاربر
  // وام در جریان
  LoanInProgress = 190206,

  // وام بسته شده
  LoanClosed = 190207
}

// وضعیت پرداخت قسط
export enum InstallmentStateEnum {
  // پرداخت شده
  Paid = 190301,

  // پرداخت نشده
  Unpaid = 190302,

  // سر رسید شده
  IsDue = 190303,

  // معوق
  OverDue = 190304,
}

// نوع دریافت کارمزد از وام
export enum LoanFeesTypeEnum {
  // بر روی همه اقساط
  AllInstallments = 190401,

  // دریافت از اقساط اول هر سال
  FirstInstallments = 190402,

  // کسر از اصل وام
  MainLoan = 190403,
}

// انواع عقد وام
export enum LoanContractTypeEnum {
  //  نوع عقد قرض الحسنه نرخ کارمزد 2 درصد سامانه 0 درصد پذیرنده 0 درصد سود
  InterestLess0 = 190501,

  //  نوع عقد قرض الحسنه نرخ کارمزد 2 درصد سامانه 1 درصد پذیرنده 0 درصد سود
  InterestLess1 = 190502,

  //  نوع عقد قرض الحسنه نرخ کارمزد 2 درصد سامانه 2 درصد پذیرنده 0 درصد سود
  InterestLess2 = 190503,
}

// انواع جزئیات عقد وام
export enum LoanContractDetailTypeEnum {
  // کارمزد سامانه
  SystemFee = 190601,

  // کارمزد پذیرنده
  AcceptorFee = 190602
}

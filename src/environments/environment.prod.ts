export const environment = {
  production: true,
  API: 'https://core.dayere.co/api/services/app/',
  services: {
    Account: {
      SendVerifyCode: 'Account/SendOtp',
      SignIn: 'Account/SignIn',
      ResetToken: 'Account/ResetToken'
    },
    Profile: {
      AuthenticateCheckUser: 'Profile/AuthenticateCheckUser',
      AuthenticateFinnotechOtp: 'Profile/AuthenticateFinnotechOtp',
      AuthenticateConfirm: 'Profile/AuthenticateConfirm',
      Get: 'Profile/Get'
    },
    Wallet: {
      GetBalance: 'Wallet/GetBalance',
      GetChargeInfo: 'Wallet/GetChargeInfo',
      GetWithdrawInfo: 'Wallet/GetWithdrawInfo',
      GetChargeGateway: 'Wallet/GetChargeGateway',
      CheckWithdraw: 'Wallet/CheckWithdraw',
      Withdraw: 'Wallet/Withdraw',
      Charge: 'Wallet/Charge',
      FindTransactions: 'Wallet/FindTransactions'
    },
    BankAccount: {
      GetAll: 'BankAccount/GetAll',
      GetAllFree: 'BankAccount/GetAllFree',
      Add: 'BankAccount/Add',
      Delete: 'BankAccount/Delete',
      SetDefault: 'BankAccount/SetDefault',
    },
    Fund: {
      GetAll: 'Fund/GetAll',
      GetAllFree: 'Fund/GetAllFree',
      GetAllVoting: 'Fund/GetAllVoting'
    },
    SocialFund: {
      GetAllMembers: 'SocialFund/GetAllMembers',
      GetFundDetail: 'SocialFund/GetFundDetail',
      GetLendingCalendar: 'SocialFund/GetLendingCalendar',
      VoteNewFund: 'SocialFund/VoteNewFund',
      GetGuaranteeDetail: 'SocialFund/GetGuaranteeDetail'
    },
    SocialFundManage: {
      GetNewFundInfo: 'SocialFundManage/GetNewFundInfo',
      CreateNewFund: 'SocialFundManage/CreateNewFund',
      SetAutoLottery: 'SocialFundManage/SetAutoLottery',
      CloseCreateNewFund: 'SocialFundManage/CloseCreateNewFund'
    },
    Loan: {
      GetAll: 'Loan/GetAll',
      GetAllRequest: 'Loan/GetAllRequest',
      GetRepayInfo: 'Loan/GetRepayInfo',
      Repay: 'Loan/Repay',
    },
    SocialLoan: {
      Calculate: 'SocialLoan/Calculate',
      GetBaseInfo: 'SocialLoan/GetBaseInfo',
      Reserve: 'SocialLoan/Reserve',
      CancelReserve: 'SocialLoan/CancelReserve',
      ConfirmReserve: 'SocialLoan/ConfirmReserve',
    },
    SocialLoanManage: {
      GetAll: 'SocialLoanManage/GetAll',
      GetAllRequest: 'SocialLoanManage/GetAllRequest',
      RejectRequest: 'SocialLoanManage/RejectRequest',
      ConfirmRequest: 'SocialLoanManage/ConfirmRequest'
    },
    Common: {
      FindReasons: 'Common/FindReasons'
    }
  }
};

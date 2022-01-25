export interface GetBalanceDto {

  withdrawAmount: number;
  balanceAmount: number;
  blockedAmount: number;
}

export interface GetChargeInfoDto {
  chargeIpgList: ChargeIpgListDto[];
  minChargeAmount: number;
  maxChargeAmount: number;
  isPermit: boolean;
}

export interface ChargeIpgListDto {
  ipgId: number;
  name: string;
  imageUrl: string;
  appBinaryObjectsId: string;
  isActive: boolean;
}

export interface GetChargeGatewayInput {
  amount: number;
}

export interface GetChargeGatewayDto {
  gatewayUrl: string;
}

export interface GetWithdrawInfoDto {
  minWithdrawAmount: number;
  maxWithdrawAmount: number;
  isPermit: boolean;
}

export interface CheckWithdrawInput {
  amount: number;
}

export interface CheckWithdrawDto {
  withdrawFee: number;
  totalAmount: number;
}


export interface WithdrawInput {
  amount: number;
  accountId: number;
}

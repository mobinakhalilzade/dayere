export interface BankAccountDto {
  bankAccountId: number;
  accountId: number;
  isActive: boolean;
  shebaNumber: string;
  accountNumber: string;
  cardNumber: string;
  isDefault: boolean;
  bankName: string;
  bankCode: number;
  bankImageUrl: string;
}

export interface AddBankAccountInput {
  isCard: boolean;
  number: string;
}

export interface DeleteBankAccountInput {
  bankAccountId: number;
}

export interface SetDefaultBankAccountInput {
  bankAccountId: number;
}

import {TransactionTypeEnum} from './general.interface';

export interface TransactionsInput {
  fromDate: string;
  toDate: string;
  fromAmount: number;
  toAmount: number;
  transactionType: TransactionTypeEnum;
  recordTake: number;
  recordSkip: number;
  ascSort: boolean;
}

export interface TransactionsDto {
  transactionId: number;
  logId: number;
  description: string;
  logDescription: string;
  amount: number;
  createDate: string;
  shamsiDate: string;
  transactionType: TransactionTypeEnum;
  transactionProcessType: any;
  trackId: string;
  balanceAmount: string;
}


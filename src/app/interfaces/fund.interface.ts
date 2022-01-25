import {FundTypeEnum, SocialFundStateEnum} from './general.interface';

export interface FundDto {
  fundId: number;
  name: string;
  imageUrl: string;
  adminName: string;
  isAdmin: boolean;
  type: FundTypeEnum;
}

export interface FreeFundDto {
  fundId: number;
  name: string;
  imageUrl: string;
  adminName: string;
  isAdmin: boolean;
  type: FundTypeEnum;
}

export interface VotingFundDto {
  fundId: number;
  name: string;
  imageUrl: string;
  adminName: string;
  isAdmin: boolean;
  type: SocialFundStateEnum;
  expireDate: string;
  remainExpireDate: number;
}




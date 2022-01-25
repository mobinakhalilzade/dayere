import {UserAuthTypeEnum} from './general.interface';

export interface AuthenticationCheckUserInput {
  nationalCode: string;
  shebaNumber: string;
  birthDate: string;
}

export interface AuthenticationCheckUserDto {
  resumeAuthenticationType: UserAuthTypeEnum;
}

export interface AuthenticateFinnotechOtpInput {
  code: string;
}

export interface AuthenticateFinnotechOtpDto {
  fullName: string;
  birthDate: string;
  nationalCode: string;
  shebaNumber: string;
}

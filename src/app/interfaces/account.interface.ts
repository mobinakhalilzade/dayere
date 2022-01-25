export interface SendOtpInput {
  mobile: string;
  uniqueDeviceCode: string;
}

export interface SendOtpDto {
  second: number;
}

export interface SignInInput {
  mobile: string;
  code: string;
  uniqueDeviceCode: string;
}

export interface SignInDto {
  token: string;
  refreshToken: string;
}

export interface ResetTokenInput {
  refreshToken: string;
}

export interface ResetTokenDto {
  token: string;
}

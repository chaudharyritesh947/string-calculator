export abstract class ITwilioService {
  abstract sendVerificationCode(phoneNumber: string): Promise<any>;
  abstract checkVerificationCode(phoneNumber: string, code: string): Promise<any>;
  abstract validateTwilioRequestArgs(params: any, isCheckVerificationRequest?: boolean);
  abstract validateTwilioCodeVerificationResponse(response: any);
}

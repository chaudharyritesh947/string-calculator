export abstract class IAuthenticateService {
  abstract validateClientUser(userCredentials: any): Promise<any>;
  abstract validateAuthenticateRequestArgs(userDetails: any);
  abstract validateUser(userDetails: any): Promise<any>;
  abstract authenticate(userDetails: any): Promise<any>;
}

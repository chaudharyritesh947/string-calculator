export abstract class IJwtInternalService {
  abstract generateJwt(clientCredential: any, clientDetails: any): Promise<any>;
  abstract saveJwt(jwtDeatils: any): Promise<any>;
}

export abstract class IAuthoriseService {
  abstract validateAuthoriseRequestArgs(userDetails: any);
  abstract validateUser(userDetails: any): Promise<any>;
  abstract authorise(userDetails: any): Promise<any>;
}

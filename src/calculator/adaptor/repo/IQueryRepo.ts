import { Observable } from 'rxjs';

export interface IQueryRepo {
  getClientUser(userDetails: any):  Observable<any>;
  getUser(req: any): Observable<any>;
  getUserCredential(req: any): Observable<any>;
}

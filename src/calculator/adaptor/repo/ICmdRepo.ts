import { Observable } from 'rxjs';

export interface ICmdRepo {
  saveJwt(req: any): Observable<any>;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { userProfile } from '../../../models/user';

@Injectable({
  providedIn: 'root'
})


export class LoggerService {
  
 GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

constructor(private http: HttpClient) { }
userData= new userProfile();

getUserDetails():Observable<any>{
  return this.http.get(this.GRAPH_ENDPOINT)
      .pipe(
        map((res:any) => { return res;})
      );
}

}

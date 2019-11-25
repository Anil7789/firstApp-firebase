import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  private api_server = 'https://myapp-b39c6.firebaseio.com/user.json';

  constructor(private http:HttpClient) {}

  public sendGetResponce(){
    return this.http.get(this.api_server);    
  }

  public submitData(name){
    return this.http.post(this.api_server, name);
  }

}

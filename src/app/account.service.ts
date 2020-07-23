import { Account } from './account';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public baseURL: string = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.baseURL + 'accounts');
  }

  postAccount(account: Account): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(account);
    console.log(body)
    return this.http.post(this.baseURL + 'accounts', body, {'headers': headers});
  }

  getAccount(id : number) : Observable<Account> {
    return this.http.get<Account>(`${this.baseURL}` + 'accounts/' + `${id}`);
  }

  updateAccount(account: Account):Observable<any> {
    return this.http.put(this.baseURL + "/" + `${account.id}`, account);
  }

  deleteCourse(id : number) : Observable<Account> {
    return this.http.delete<Account>(`${this.baseURL}accounts/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Voucher } from './voucher';
import {VOUCHERS} from './voucher.json';
import { of,Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import {map} from 'rxjs/operators';


@Injectable()
export class VoucherService{
    private urlEndPoint:string = 'http://localhost:8080/api/voucher';

    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

    constructor(private http: HttpClient) { }

    getVocuher(): Observable<Voucher[]> {
        //return of(VOUCHERS);
        return this.http.get(this.urlEndPoint).pipe(
            map(response => response as Voucher[])
        )
    }

    create(voucher: Voucher) : Observable<Voucher> {
        return this.http.post<Voucher>(this.urlEndPoint, voucher, {headers: this.httpHeaders})
    }

}
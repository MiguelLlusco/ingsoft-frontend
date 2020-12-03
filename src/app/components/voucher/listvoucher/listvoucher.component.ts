import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Voucher} from './voucher';
import {VOUCHERS} from './voucher.json';
import { VoucherService } from './voucher.service';

@Component({
  selector: 'app-listvoucher',
  templateUrl: './listvoucher.component.html'
  
})
export class ListvoucherComponent implements OnInit {

  vouchers!: Voucher[];

  constructor(private voucherService: VoucherService) { }

  ngOnInit(): void {
    this.voucherService.getVocuher().subscribe(
      vouchers => this.vouchers = vouchers
    );
  }

}

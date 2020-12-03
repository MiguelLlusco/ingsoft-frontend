import { Component, OnInit } from '@angular/core'
import { Voucher } from './voucher'
import {VoucherService} from './voucher.service'
import {Router} from '@angular/router'


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

    private voucher: Voucher = new Voucher()
    private titulo:string ="Crear Voucher"

    constructor(private voucherService: VoucherService,
    private router: Router) { }

    ngOnInit() {
    }
    public create(): void{
        this.voucherService.create(this.voucher).subscribe(
            response => this.router.navigate(['/vouchers'])
        )
    }

}
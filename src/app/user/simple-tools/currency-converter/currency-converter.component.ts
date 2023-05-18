import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SimpleToolsService } from '../simple-tools.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  currencyCodes: any[] = [];
  currencyForm: FormGroup;

  result = 0;

  constructor(
    private apiService: SimpleToolsService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.getCurrencyCode();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  createForm() {
    this.currencyForm = new FormGroup({
      from: new FormControl(''),
      to: new FormControl(''),
      amount: new FormControl(''),
      amountTo: new FormControl(''),
    });
  }

  onFromCurrencyChange() {
    this.currencyForm.get('amount').reset();
  }

  getCurrencyCode() {
    this.apiService.getCurrencyCodes().subscribe((res) => {
      if (res) {
        res.supported_codes.forEach((element) => {
          this.currencyCodes.push({
            code: element[0],
            countryName: element[1],
          });
        });
      }
    });
  }

  getExchangeResult() {
    const data = {
      from: this.currencyForm.value.from,
      to: this.currencyForm.value.to,
      amount: this.currencyForm.value.amount,
    };
    this.apiService.getExchangeResult(data).subscribe((res) => {
      this.result = res.conversion_result;
    });
  }
}

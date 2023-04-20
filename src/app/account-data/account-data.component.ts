import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css'],
})
export class AccountDataComponent {
  @Input() personalAcc: any;
  @Input() index: number | undefined;

  @Output() newAccountStatus = new EventEmitter<{
    id: number | undefined;
    account: string | undefined;
  }>();
  setStatus(status: string) {
    console.log(status);
    this.newAccountStatus.emit({
      id: this.index,
      account: status,
    });
  }
}

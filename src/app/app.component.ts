import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accounts = [
    {
      accountName: 'Mastaer Account',
      account: 'ative',
    },
    {
      accountName: 'Test Account',
      account: 'inactive',
    },
    {
      accountName: 'Hiden Account',
      account: 'hidden',
    },
  ];

  accountData(data: any) {
    console.log(data);
    this.accounts.push(data);
  }

  changeStatus(data: any) {
    console.log('change data', data);
    this.accounts[data.id].account = data.account;
  }
}

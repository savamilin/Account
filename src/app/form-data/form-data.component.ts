import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent {
  @ViewChild('accountName') name: ElementRef | undefined;
  @ViewChild('status') statusAcount: ElementRef | undefined;

  @Output() sendInfo = new EventEmitter<{
    accountName: string;
    account: string;
  }>();
  userAccount() {
    console.log(this.name?.nativeElement.value);
    console.log(this.statusAcount?.nativeElement.value);
    this.sendInfo.emit({
      accountName: this.name?.nativeElement.value,
      account: this.statusAcount?.nativeElement.value,
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {createMask} from "@ngneat/input-mask";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  t: Inputmask.Options | undefined;
  public get getValue(): Date {
    if (typeof this.textFC.value === "string") {
      const datearray = (this.textFC.value as unknown as string)?.split("/");

      const newdate = datearray[1] + '/' + datearray[0] + '/' + datearray[2];

      return new Date(newdate);

    } else {
      return this.textFC.value as Date;
    }

  }

  textFC = new FormControl(new Date());
  textInputMask = createMask({
    alias: 'datetime',
    inputFormat: 'dd/mm/yyyy',
    placeholder: 'dd/mm/yyyy'
    // parser: (value: string) => {
    //   return new Date(value);
    // }
  });

  constructor() {

  }

  public ngOnInit() {
    this.textFC.valueChanges.subscribe((value) => {
      console.log('value changed', value);
    });
  }

  public onTest(): void {
    console.log(this.textFC);
  }

  public onDateChange(value: any): void {
    this.textFC.setValue(value);
  }
}

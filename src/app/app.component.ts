import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  Operator = ""

  btn1() {
    this.Operator += 1;
  }
  btn2() {
    this.Operator += 2;
  }
  btn3() {
    this.Operator += 3;
  }

  btn4() {
    this.Operator += 4;
  }
  btn5() {
    this.Operator += 5;
  }
  btn6() {
    this.Operator += 6;
  }

  btn7() {
    this.Operator += 7;
  }
  btn8() {
    this.Operator += 8;
  }
  btn9() {
    this.Operator += 9;
  }

  btnMin() {
    this.Operator += "-";
  }
  btnPlus() {
    this.Operator += "+";
  }
  btnMulti() {
    this.Operator += "*";
  }
  btnResult() {
    
  }
}

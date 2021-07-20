import { Component, OnInit } from '@angular/core';
import { Budget } from './budget';

@Component({
  selector: 'app-budgetde',
  templateUrl: 'de.budget.component.html',
  styleUrls: ['../budget/budgeten.component.css']
})
export class BudgetdeComponent implements OnInit {
  total: number;
  amount: number;
  tempPlus: number;
  tempMinus: number;
  description: string;
  descriptionMinus: string;
  descriptionPlus: string;
  BudgetIOObj: any;
  BudgetIOPlus: Array<Budget> = [];
  BudgetIOMinus: Array<Budget> = [];
  tempArray: Array<Budget> = [];
  countPlus: number;
  countMinus: number;
  countMoneyPlus: number;
  countMoneyMinus: number;
  color: string;
  dialogInput: string;
  isShown: boolean;
  editTempPlus: number;

  constructor() {
    this.total = 0;
    this.countMinus = 0;
    this.countPlus = 0;
    this.countMoneyMinus = 0;
    this.countMoneyPlus = 0;
    this.BudgetIOPlus = [];
    this.BudgetIOMinus = [];
    this.color = 'green';
    this.isShown = false;
  }

  ngOnInit() {}

  AddMoney(money: string, description: string) {
    if (Number(money) > 0) {
      this.BudgetIOObj = new Budget();
      this.BudgetIOObj.amount = Number(money);
      this.BudgetIOObj.description = description;

      this.BudgetIOPlus.push(this.BudgetIOObj);

      this.countPlus++;
      this.countMoneyPlus += Number(money);

      //this.tempPlus = Number(money);
      //this.descriptionPlus = description;
    }
    if (Number(money) < 0) {
      this.BudgetIOObj = new Budget();
      this.BudgetIOObj.amount = Number(money);
      this.BudgetIOObj.description = description;

      this.BudgetIOMinus.push(this.BudgetIOObj);

      this.countMinus++;
      this.countMoneyMinus += Number(money);

      //this.tempMinus = Number(money);
      //this.descriptionMinus = description;
    }

    this.total += Number(money);
    if (this.total >= 0) {
      this.color = 'green';
    }
    if (this.total < 0) {
      this.color = 'red';
    }
  }

  ClearAll() {
    this.BudgetIOPlus = [];
    this.BudgetIOMinus = [];
    this.countMinus = 0;
    this.countPlus = 0;
    this.countMoneyMinus = 0;
    this.countMoneyPlus = 0;
  }
  //Edit(index: number) {
  //this.isShown = !this.isShown;
  //}
}

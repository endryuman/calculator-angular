import { Component } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CalcGroup {
  first: CalcVar;
  second: CalcVar;
  operation: CalcOperations;
}

interface CalcVar {
  value: number;
  modificator: CalcModifiers;
}

enum CalcOperations {
  plus = '+',
  minus = '-',
  multiply = '*',
  divide = '/',
}

enum CalcModifiers {
  none = 'none',
  sin = 'sin',
  cos = 'cos',
  square = 'square',
}

@Component({
  selector: 'app-my-calculator',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './my-calculator.component.html',
  styleUrl: './my-calculator.component.scss',
})
export class MyCalculatorComponent {
  calcOperations = CalcOperations;

  calcModifiers = CalcModifiers;

  calcGroups: CalcGroup[] = [
    {
      first: {
        value: 5,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 5,
        modificator: CalcModifiers.none,
      },
      operation: CalcOperations.plus,
    },
  ];

  history: string[] = [];

  operationsBetweenGroups: CalcOperations[] = [];

  result?: number;

  addGroup(): void {
    this.calcGroups.push({
      first: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      second: {
        value: 0,
        modificator: CalcModifiers.none,
      },
      operation: CalcOperations.plus,
    });

    this.operationsBetweenGroups.push(this.calcOperations.plus);
  }

  removeGroup(index: number): void {
    this.calcGroups.splice(index, 1);
  }

  calcGroup() {
    let result = 0;

    let tempHistory: string[] = [];

    this.calcGroups.forEach((group, i) => {
      if (i === 0) {
        result = this.calc(
          this.calcValueWithModif(group.first),
          this.calcValueWithModif(group.second),
          group.operation
        );
      } else {
        let tempResult = this.calc(
          this.calcValueWithModif(group.first),
          this.calcValueWithModif(group.second),
          group.operation
        );
        result = this.calc(
          result,
          tempResult,
          this.operationsBetweenGroups[i - 1]
        );
      }
      tempHistory.push(
        `(${
          group.first.modificator !== CalcModifiers.none
            ? group.first.modificator
            : ''
        } ${group.first.value}
          ${group.operation}
          ${
            group.second.modificator !== CalcModifiers.none
              ? group.second.modificator
              : ''
          } ${group.second.value})
          `
      );
    });
    tempHistory.push(`=${result}`);
    this.history.push(tempHistory.join(' '));

    this.result = result;
  }

  calcValueWithModif(value: CalcVar): number {
    switch (value.modificator) {
      case CalcModifiers.none:
        return value.value;
      case CalcModifiers.cos:
        return Math.cos(value.value);
      case CalcModifiers.sin:
        return Math.sin(value.value);
      case CalcModifiers.square:
        return Math.pow(value.value, 2);
    }
  }

  calc(first: number, second: number, operation: CalcOperations): number {
    switch (operation) {
      case CalcOperations.plus:
        return first + second;
      case CalcOperations.minus:
        return first - second;
      case CalcOperations.multiply:
        return first * second;
      case CalcOperations.divide:
        return first / second;
    }
  }
}

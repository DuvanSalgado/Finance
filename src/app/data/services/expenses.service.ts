import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { expenseModel } from 'src/app/core/models/expenses/expenses.model';
import { expenseRepository } from 'src/app/core/repositories/expenses.repository';

@Injectable()
export class ExpensesService implements expenseRepository {
  constructor() {}
  getAll(): Observable<expenseModel> {
    throw new Error('Method not implemented.');
  }
  create(expense: expenseModel): void {
    throw new Error('Method not implemented.');
  }
}

import { Observable } from 'rxjs';
import { expenseModel } from '../models/expenses/expenses.model';

export interface expenseRepository {
  getAll(): Observable<expenseModel>;
  create(expense: expenseModel): void;
}

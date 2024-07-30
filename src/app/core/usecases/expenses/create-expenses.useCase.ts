/* import { Injectable } from "@angular/core";
import { ExpenseRepository } from "src/app/data/repository/expenses/expenses.repository";
import { expenseModel } from "../../domain/expenses/expenses.model";
import { UseCase } from "../../base/use.case";

@Injectable()
  export class CreateExpenseUsecase implements UseCase<expenseModel, void> {
  
    constructor(private expenseRepository: ExpenseRepository) { }
  
    execute(expense: expenseModel) {
      return this.expenseRepository.create(expense);
    }
  }
   */
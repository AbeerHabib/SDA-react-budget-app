import { FormEvent, ChangeEvent, useState } from 'react';

import { IncomeExpensesType } from '../types/IncomeExpensesType'; 
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {

  const [expense, setExpense] = useState<IncomeExpensesType>({
    id: '',
    source: '',
    amount: 0,
    date: new Date(),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpense((expense) => ({ ...expense, [name]: value }));
  };

  const [expenses, setExpenses] = useState<IncomeExpensesType[]>([]);
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newExpense = { ...expense, id: uuidv4() };
    setExpenses((expenses) => [...expenses, newExpense]);
  };

  const handleDelete = (expenseId: string) => {
    const UpdatedExpenses = expenses.filter(expense => expense.id !== expenseId)
    setExpenses(UpdatedExpenses);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='source'>
          <label htmlFor='source'>Expense Source</label>
          <input type='text' name='source' id='source' value={expense.source} onChange={handleChange} required/>
        </div>

        <div className='amount'>
          <label htmlFor='amount'>Amount of Expense</label>
          <input type='number' name='amount' id='amount' value={expense.amount} onChange={handleChange} required/>
        </div>

        <div className='date'>
          <label htmlFor='date'>Date of Expense</label>
          <input type='date' name='date' id='date' value={expense.date.toString()} onChange={handleChange} required/>
        </div>

        <button type='submit'>Add</button>
      </form>
  
      <ul className='incomes-expenses-info'>
        {expenses.length > 0 && expenses.map((expense, id) => (
          <li key={id}>
            <div>
              {expense.source}: {expense.amount}EUR on {expense.date.toString()}
              <button className='delete-btn' type='button' onClick={()=> {handleDelete(expense.id)}}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default ExpenseForm;
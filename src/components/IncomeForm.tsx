import { FormEvent, ChangeEvent, useState } from 'react';

import { IncomeExpensesType } from '../types/IncomeExpensesType'; 
import { v4 as uuidv4 } from 'uuid';

const IncomeForm = () => {

  const [income, setIncome] = useState<IncomeExpensesType>({
    id: '',
    source: '',
    amount: 0,
    date: new Date(),
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((income) => ({ ...income, [name]: value }));
  };

  const [incomes, setIncomes] = useState<IncomeExpensesType[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newIncome = { ...income, id: uuidv4() };
    setIncomes((incomes) => [...incomes, newIncome]);
  };

  const handleDelete = (incomeId: string) => {
    const UpdatedIncomes = incomes.filter(income => income.id !== incomeId)
    setIncomes(UpdatedIncomes);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='source'>
          <label htmlFor='source'>Income Source</label>
          <input type='text' name='source' id='source' value={income.source} onChange={handleChange} required/>
        </div>

        <div className='amount'>
          <label htmlFor='amount'>Amount of Income</label>
          <input type='number' name='amount' id='amount' value={income.amount} onChange={handleChange} required/>
        </div>

        <div className='date'>
          <label htmlFor='date'>Date of Income</label>
          <input type='date' name='date' id='date' value={income.date.toString()} onChange={handleChange} required/>
        </div>
        
        <button type='submit'>Add</button>
      </form>
  
      <ul className='incomes-expenses-info'>
        {incomes.length > 0 && incomes.map((income, id) => (
          <li key={id}>
            <div>
              {income.source}: {income.amount}EUR on {income.date.toString()}
              <button className='delete-btn' type='button' onClick={()=> {handleDelete(income.id)}}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
  
export default IncomeForm;
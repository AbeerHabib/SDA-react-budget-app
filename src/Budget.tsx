import { useState } from 'react';

import IncomeForm from './components/IncomeForm';
import ExpenseForm from './components/ExpenseForm';
import TargetForSaving from './components/TargetForSaving';
import TransferForSaving from './components/TransferForSaving';

const Budget = () => {

    const [savingAmount, setSavingAmount] = useState(0);
  
    const getSavingAmount = (amount: number) => {
      setSavingAmount(amount);
    }
  
    return (
      <div className='container'>
        <h1>Budget APP</h1>
        <IncomeForm />
        <ExpenseForm />
        <TargetForSaving savingAmount={savingAmount}/>
        <TransferForSaving getSavingAmount={getSavingAmount}/>
      </div>
    );
};
  
export default Budget;
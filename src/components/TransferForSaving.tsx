import { FormEvent, ChangeEvent, useState } from 'react';

type TransferForSavingFormType = {
  getSavingAmount: (amount: number) => void;
}

const TransferForSaving = (props: TransferForSavingFormType) => {

  const [amount, setTransferAmount] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(Number(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.getSavingAmount(amount);
    setTransferAmount(0);
    
  };

  return (
    <div className='form-container'>  
      <p className='balance'>Current Balance: 5930</p>
        
      <form onSubmit={handleSubmit}>
        <div className='transfer-form'>
          <label htmlFor='amount'>Transfer to Saving Account</label>
          <input type='number' name='amount' id='amount' value={amount} onChange={handleChange} required/>
        </div>

        <button type='submit'>Transfer</button>
      </form>
        
      <div className='info'>
        <label htmlFor='progress'>Progress: 5%</label>
        <progress max='100' value={5} id='progress' /> 
      </div>
    </div>
  );
};
  
export default TransferForSaving;
import { FormEvent, ChangeEvent, useState } from 'react';

type TargetForSavingPropType = {
  savingAmount: number;
}

const TargetForSaving = (props: TargetForSavingPropType) => {

  const [target, setTarget] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTarget(0);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div className='target-form'>
          <label htmlFor='target'>Set Target</label>
          <input type='number' name='target' id='target' value={target} onChange={handleChange} required/> 
        </div>
      
        <button type='submit'>Reset</button>
      </form>

      <p className='info'>Target: {target}</p>

      <div>
        <p className='info'>Current Saving: {props.savingAmount} </p>
      </div> 
    </div>
  );
};

export default TargetForSaving;
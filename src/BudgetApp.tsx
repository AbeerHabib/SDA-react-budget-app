import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Budget from './Budget';
import './styles/BudgetApp.css';

const BudgetApp = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Budget />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default BudgetApp;
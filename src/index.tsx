import React from 'react'
import ReactDOM from 'react-dom/client'

import BudgetApp from './BudgetApp'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BudgetApp />
  </React.StrictMode>,
)

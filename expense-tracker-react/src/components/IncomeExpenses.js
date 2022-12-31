import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
    .filter(item => item>0)
    .reduce((acc,item) => (acc+=item),0)
    .toFixed(2);

    const expense = (
        amounts.filter(item => item<0).reduce((acc,item) => (acc+=item),0)*-1
    ).toFixed(2);

  return (
    <div class = "inc-exp-container">
        <div>
            <h4>Income</h4>
            <p class ="money plus">+{income}</p>
        </div>
        <div>
            <h4>Expenses</h4>
            <p class ="money minus">{expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpences } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <AddTransaction />
        <TransactionList />
      </div>
    </>
  );
}

export default Home;

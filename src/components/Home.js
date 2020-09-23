import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpences } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import { AddTransaction } from './AddTransaction';

function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpences />
        <AddTransaction />
      </div>
      <div className="container container-history">
        <TransactionList />
      </div>
    </>
  );
}

export default Home;

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numWithCommas } from '../utils/Formatting';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="balance">
        {total < 0 ? '-' : ''}₹{numWithCommas(Math.abs(total))}
      </h1>
    </>
  );
};

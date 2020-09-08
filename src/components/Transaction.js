import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numWithCommas } from '../utils/Formatting';
export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sign} ₹{numWithCommas(Math.abs(transaction.amount))}
      </span>
      <button
        onClick={() =>
          // eslint-disable-next-line no-restricted-globals
          confirm('Are you sure you want to delete this expense')
            ? deleteTransaction(transaction.id)
            : null
        }
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};

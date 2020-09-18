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
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
          />
        </svg>
      </button>
    </li>
  );
};

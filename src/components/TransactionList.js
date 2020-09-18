import React, { useContext, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const transitions = useTransition(transactions, (item) => item.id, {
    from: { transform: 'scale(0.9)', opacity: 0 },
    enter: { transform: 'scale(1)', opacity: 1 },
    leave: { transform: 'scale(0.9)', opacity: 0 },
    trail: 300,
  });
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Transaction key={item.id} transaction={item} />
          </animated.div>
        ))}
      </ul>
    </>
  );
};

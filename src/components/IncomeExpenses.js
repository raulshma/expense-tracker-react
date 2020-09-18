import React, { useContext, useState, useRef } from 'react';
import { useSpring, animated, useChain } from 'react-spring';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpences = () => {
  const { transactions } = useContext(GlobalContext);

  const [oldIncome] = useState(0);
  const [oldExpense] = useState(0);

  const animRef = useRef();
  const anim = useSpring({ opacity: 1, from: { opacity: 0 }, ref: animRef });

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const animIncomeRef = useRef();
  const animIncome = useSpring({
    number: Number(income),
    from: { number: oldIncome },
    ref: animIncomeRef,
  });

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const animExpenseRef = useRef();
  const animExpense = useSpring({
    number: Number(expense),
    from: { number: oldExpense },
    ref: animExpenseRef,
  });

  useChain([animRef, animIncomeRef, animExpenseRef]);

  return (
    <animated.div style={anim}>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">
            + ₹{' '}
            <animated.span>
              {animIncome.number.interpolate((val) => Math.floor(val))}
            </animated.span>
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            - ₹{' '}
            <animated.span>
              {animExpense.number.interpolate((val) => Math.floor(val))}
            </animated.span>
          </p>
        </div>
      </div>
    </animated.div>
  );
};

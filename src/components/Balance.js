import React, { useContext, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const [oldBalance, setOldBalance] = useState(0);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const anim = useSpring({
    number: Number(total),
    from: { number: oldBalance },
  });
  useEffect(() => {
    setOldBalance(total);
  }, [total]);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 className="balance">
        {total < 0 ? '-' : ''}₹
        <animated.span>
          {anim.number.interpolate((val) => Math.floor(val))}
        </animated.span>
      </h1>
    </>
  );
};

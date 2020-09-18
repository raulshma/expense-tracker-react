import React, { useState, useContext } from 'react';
import { useSpring, animated, useChain } from 'react-spring';

import { GlobalContext } from '../context/GlobalState';
import firebase from 'firebase/app';
export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const animTxt1 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 150 });
  const animTxt2 = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 300 });
  const animBtn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 450 });

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: +amount,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    addTransaction(newTransaction);
    setText('');
    setAmount(0);
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <animated.div style={animTxt1}>
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter text..."
            />
          </div>
        </animated.div>
        <animated.div style={animTxt2}>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
        </animated.div>{' '}
        <animated.div style={animBtn}>
          <button className="btn">Add transaction</button>
        </animated.div>
      </form>
    </>
  );
};

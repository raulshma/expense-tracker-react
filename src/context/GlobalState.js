import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { db } from '../firebase';

const initialState = {
  user: null,
  transactions: [],
  error: null,
  loading: true,
};

//Create Context
export const GlobalContext = createContext(initialState);

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  async function getTransactions() {
    await db
      .collection('expenses')
      .where('userId', '==', state.user.uid)
      .orderBy('timeStamp', 'desc')
      .onSnapshot((snapshot) =>
        dispatch({
          type: 'GET_TRANSACTIONS',
          payload: snapshot.docs.map((doc) => {
            const data = doc.data();
            const { id } = doc;
            return {
              ...data,
              id,
            };
          }),
        })
      );
  }
  async function deleteTransaction(id) {
    db.collection('expenses')
      .doc(id)
      .delete()
      .then(function () {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id,
        });
      })
      .catch(function (error) {
        console.error('Error removing expense: ', error);
      });
  }
  async function addTransaction(transaction) {
    const expense = { ...transaction, userId: state.user.uid };
    db.collection('expenses')
      .add(expense)
      .then((documentReference) => {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: expense,
        });
      })
      .catch((error) => {
        console.log('Error adding expense', error.message);
      });
  }
  function setUser(user) {
    dispatch({
      type: 'SET_USER',
      payload: user,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        user: state.user,
        transactions: state.transactions,
        setUser,
        getTransactions,
        deleteTransaction,
        addTransaction,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

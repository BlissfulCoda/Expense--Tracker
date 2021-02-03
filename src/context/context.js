import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 20,
    category: 'Travel',
    type: 'Income',
    date: '2021-02-06',
    id: '5b627a4e-2960-44c1-ac87-06e316978572'
  },
  {
    amount: 50,
    category: 'Car',
    type: 'Income',
    date: '2021-02-05',
    id: '21c1e1bb-7689-48be-9745-0b4803afd0fd'
  },
  {
    amount: 100,
    category: 'House',
    type: 'Income',
    date: '2021-02-05',
    id: 'f679d421-6a23-4b7a-9e63-8d0b0d1ed6f4'
  }
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  const deleteTransaction = id =>
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  const addTransaction = transaction =>
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const balance = transactions.reduce(
    (acc, currvalue) =>
      currvalue.type === 'Expense'
        ? acc - currvalue.amount
        : acc + currvalue.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        deleteTransaction,
        addTransaction,
        transactions
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

import React, { useContext } from 'react';
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
  Icon
} from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './style';

const List = () => {
  const classes = useStyles();
  const { deleteTransaction } = useContext(ExpenseTrackerContext);

  const transactions = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: 2000,
      date: 'Tue Feb 21'
    },
    {
      id: 2,
      type: 'Expense',
      category: 'Tuxedo',
      amount: 60,
      date: 'Tue Feb 22'
    },
    {
      id: 3,
      type: 'Expense',
      category: 'Mortgage',
      amount: 300,
      date: 'Tue Feb 23'
    }
  ];

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map(transaction => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`£${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" arial-label="delete" onClick="">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;

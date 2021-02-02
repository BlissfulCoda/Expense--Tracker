import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import Form from './Form/Form';
import List from'./List/List'

import useStyles from './styles';
const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered By Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance £100
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: '1.5em', marginTop: '20px ' }}
        >
          {/** InforCard */}
          Try Saying: Add Income for £50 in Category Salary for Sunday
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;

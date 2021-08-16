import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
      '&>*': {
        margin: theme.spacing(4, 0),
      },
    },
    grid: {
      padding: theme.spacing(4, 1),
      width: '100%',
    },
  })
);

const Registration = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <RegisterForm />
    </Container>
  );
};

export default Registration;
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from 'Router';
import { useUserState } from 'user/UserContext';
import RegisterForm from './RegisterForm';
import SignInForm from './SignInForm';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: theme.spacing(2, 0),
      '&>*': {
        margin: theme.spacing(4,0),
      },
    },
    grid: {
      padding: theme.spacing(4, 1),
      width: '100%',
    },
    gridItem: {},
  })
);
const SignInPage = () => {
  const classes = useStyles();
  let userState = useUserState();
  let history = useHistory();
  const { isAuth } = userState;

  React.useEffect(() => {
    if (!isAuth) return;
    history.push(Routes.Homepage);
  }, [isAuth, history]);

  return (
    <div className={classes.container}>
      <SignInForm />
      <RegisterForm />
    </div>
  );
};

export default SignInPage;

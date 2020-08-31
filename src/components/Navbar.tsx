import React, { CSSProperties, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo_img from 'assets/logo.svg';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import UserContext from 'UserContext';
import Button from '@material-ui/core/Button/Button';
import { auth } from 'firebase.utils';
import { Routes } from 'Router';
import ShoppingCartIcon from './ShoppingCartIcon';

export const navbarHeight = '64px';

const FlexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as CSSProperties;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      ...FlexCenter,
      height: navbarHeight,
      padding: '8px 8px 0',
      fontSize: '1rem'
    },
    logo: {
      height: '100%',
    },
    navLinks: {
      ...FlexCenter,
      justifyContent: 'flex-end',
      width: '100%',
      '&>*': {
        marginLeft: '16px',
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  const userContext = useContext(UserContext);
  return (
    <div className={classes.container}>
      <Link
        to={Routes.Homepage}
        style={{
          height: '100%',
          ...FlexCenter,
        }}
      >
        <img src={logo_img} className={classes.logo} alt='logo' />
      </Link>
      <div className={classes.navLinks}>
        <Link to={Routes.Shop}>Shop</Link>
        <Link to={Routes.Checkout}>Checkout</Link>
        {userContext.isAuth ? (
          <SignOutButton />
        ) : (
          <Link to={Routes.SignIn}>Sign In</Link>
        )}
        <Link to='#'>
          <ShoppingCartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

const SignOutButton = () => {
  return <Button onClick={() => auth.signOut()}>Sign Out</Button>;
};

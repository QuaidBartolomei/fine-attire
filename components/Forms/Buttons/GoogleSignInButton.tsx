import Button from '@material-ui/core/Button';
import React from 'react';
import { signInWithGoogle } from 'utils/firebase.utils';

export const GoogleSignInButton = () => (
  <Button
    variant='contained'
    onClick={() => {
      signInWithGoogle().catch(error => {});
    }}
  >
    Sign In With Google
  </Button>
);
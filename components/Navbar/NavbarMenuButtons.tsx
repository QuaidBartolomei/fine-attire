import Stack from '@mui/material/Stack';
import * as React from 'react';
import ShoppingCartIconButton from './ShoppingCartIcon';
import UserDrawerButton from './UserDrawerButton';

export default function NavbarMenuButtons() {
  return (
    <Stack direction='row' alignItems='center'>
      <UserDrawerButton />
      <ShoppingCartIconButton />
    </Stack>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

type Props = {
  children: React.ReactNode;
};

type IUser={
  name:string;
}

export default function ContainedButtons({ children }: Props) {
  const [user, setUser] = React.useState<IUser | null>(null);
  console.log(user)
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}

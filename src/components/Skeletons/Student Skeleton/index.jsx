import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({

    stack:
    {
        position :'relative',
        top:'20px',
        left:'20px',
    }
}));

export default function Variants() {
    const classes = useStyles();
  return (
    <Stack spacing={1} className={classes.stack}>
      {/* For variant="text", adjust the height via font-size */}
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
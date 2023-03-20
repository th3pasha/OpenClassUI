import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ColorInversionOverview() {
  return (
    <Card
      variant="solid"
      color="#36393F"
      sx={{ backgroundColor: 'rgb(62,64,75)', gap: 2, maxWidth: 300}}
    >
      <Chip
        size="sm"
        variant="soft"
        sx={{ alignSelf: 'flex-start', borderRadius: 'xl' }}
      >
        New
      </Chip>
      <IconButton
        variant="outlined"
        size="sm"
        sx={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}
      >
        <BookmarkOutlinedIcon />
      </IconButton>
      <Typography fontSize="xl2" fontWeight="lg" color='#000000'>
        Check out OpenChat™
      </Typography>
      <Button variant="solid" endDecorator={<KeyboardArrowRightIcon />}>
        Read more
      </Button>
    </Card>
  );
}
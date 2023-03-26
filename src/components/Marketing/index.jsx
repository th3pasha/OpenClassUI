import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Chip, Typography, IconButton, Button } from '@mui/joy';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const useStyles = makeStyles((theme) => ({
  box:
  {
    backgroundColor: '#343A46',
    borderRadius : '15px',
  },
  chip:
  {
    position: 'absolute',
    top:'2vh',
    left: '2vh',
  },
  bookmark:
  {
    position: 'absolute',
    top:'3vh',
    left:'27vh',
  },
  first:
  {
    position:'relative',
    top:'4.3vh',
    left:'6vh',
  },
  second:
  {
    position:'relative',
    bottom:'0.05rem',
    left:'13vh',
  },
  button:
  {
    position:'absolute',
    top:'2vh',
    left:'10vh',
  },
}));

export default function Marketing() {

  const navigate = useNavigate();
  const classes = useStyles();
  function handleClick() {
    navigate('/openchat');
  }
  
  return (
    <Box className={classes.box} sx={{ width: 350, height: 200}}>
      <Chip size="sm"
            variant="soft"
            sx={{ alignSelf: 'flex-end', borderRadius: 'xl' }}
            className={classes.chip}>New</Chip>
      <IconButton
        variant="outlined"
        size="sm"
        className={classes.bookmark}
      >
        <BookmarkOutlinedIcon />
      </IconButton>
      <Typography className={classes.first} sx={{color: '#EBECF0' ,fontSize:'28px'}}> Try </Typography>
      <Typography className={classes.second} sx={{color: '#096BDE',fontSize:'30px'}}> OpenChat™ </Typography>
      <Button variant="solid" className={classes.button} endDecorator={<KeyboardArrowRightIcon />} onClick={handleClick}>
        Read more
      </Button>
      
    </Box>
  );
}
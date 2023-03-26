import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';
import Cookies from "universal-cookie";
import axios from 'axios';
import './post.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        borderRadius: '15px',
        margin: '0 auto',
        height:'26vh',
        backgroundColor:'#343A46',
    },

    textField:
    {
    },
    button: {
        marginTop: theme.spacing(0),
        backgroundColor:'#096DBE'
    },
    header:
    {
        color:'#EBECF0',
    },
}));

export default function Post() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const [isError, setError] = useState(false);
    const [first_name, setFirstName] = useState('');
    const [isFetched, setFetched] = useState('');
    const [imagesUrl, setImages] = useState(null);

    const cookies = new Cookies();
    const id = cookies.get('userid');

    const fetchAvatar = async () => {
        await axios
          .get("http://localhost:8080/v1/auth/student/files")
          .then((response) => {
            setImages(response.data);
            setFetched(true);    
        
          });
      }
    
      const fetchName = async() =>
      {
        await axios
          .get('http://localhost:8080/v1/auth/student/' + id)
          .then(response => { 
            setFirstName(response.data.lastName.toUpperCase());
            setFetched(false); })
      }
    
      useEffect(() => {
        fetchAvatar();
        fetchName();
      }, []);
    

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    const handlePostContentChange = (event) => {
        setContent(event.target.value);
    };

    const handlePostClick = () => {
        if (content !== '') {
            axios.post('http://localhost:8080/v1/auth/posts/' + id + '/', { content })
                .then(response => {
                    setContent('');
                    setDisabled(true);
                })
        }
        else 
        {
            setError(true);
        }
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={isFetched ? (<Avatar className={classes.avatar} src={imagesUrl} />) : (<Avatar className={classes.avatar}>{Array.from(first_name)[0]}</Avatar>)}
                title="Create a Post"
                className={classes.header}
            />
            <CardContent>
                <TextField
                    className={classes.textField}
                    label="What's on your mind?"
                    multiline
                    rows={3}
                    variant="outlined"
                    fullWidth
                    color='primary'
                    inputProps={{ style: { color: "#EBECF0" } }}
                    InputLabelProps={{
                        style: { color: '#EBECF0' },
                      }}

                    value={content}
                    onChange={handlePostContentChange}
                />
            </CardContent>
            <CardActions>
            <Grid item xs={4} />
            <Grid item xs={4} />
            <Grid item xs={4} container justify="flex-end">

                {!isDisabled ?
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handlePostClick}
                        endIcon={<SendIcon />}
                    >
                        Post
                    </Button> : (<Button
                        endIcon={<SendIcon />}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disabled
                    >
                        Post
                    </Button>)}
            </Grid>
            </CardActions>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={isError} autoHideDuration={5000} onClose={handleClose}>
                    <Alert variant="filled" color="error" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        empty post, try again
                    </Alert>
                </Snackbar>
            </Stack>
        </Card>
    );
}
import React, { useNavigate,useState } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Cookies from "universal-cookie";
import axios from 'axios';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        borderRadius: '15px',
        margin: '0 auto',
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

export default function Post({ avatarUrl }) {
    const classes = useStyles();
    const [content, setContent] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const [isError, setError] = useState(false);

    const cookies = new Cookies();
    const id = cookies.get('userid');

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
                avatar={<Avatar src={avatarUrl} />}
                title="Create a Post"
            />
            <CardContent>
                <TextField
                    className={classes.textField}
                    label="What's on your mind?"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    value={content}
                    onChange={handlePostContentChange}
                />
            </CardContent>
            <CardActions>
                {!isDisabled ?
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        onClick={handlePostClick}
                    >
                        Post
                    </Button> : (<Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        disabled
                    >
                        Post
                    </Button>)}
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
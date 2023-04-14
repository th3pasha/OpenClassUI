import React, { useState, useCallback, useEffect } from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, TextField } from '@material-ui/core';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/joy';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PostZone from '../Dropzone/Post';
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
        height: '26vh',
        backgroundColor: '#343A46',
    },

    textField:
    {
    },
    button: {
        marginTop: theme.spacing(0),
        backgroundColor: '#096DBE'
    },
    header:
    {
        color: '#EBECF0',
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
    const [imagesUrl, setImages] = useState();
    const [isAvatar, setAvatar] = useState(false);

    const cookies = new Cookies();
    const id = cookies.get('userid');


    const formData = new FormData();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [isFileUploaded, setFileUploaded] = useState(false);
    const [fileExtension, setFileExtension] = useState(false);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const onDrop = useCallback(acceptedFiles => {
        const files = acceptedFiles[0];
        setFileExtension(file.name.split('.').pop().toLowerCase());

        console.log(files);

        formData.append('file', file, fileName);

        axios.post("http://localhost:8080/v1/auth/student/files", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                setError(false);
                setFileUploaded(true);
            })
            .catch(error => {
                console.log(error);
                setError(true);
            });
            
        if (fileExtension !== 'png') {
            setError(true);
            return;
        }

    }, []);

    function uploadImage() {

        
    }

    function handlePostClick() {

        if (content !== '') {
            axios.post('http://localhost:8080/v1/auth/posts/' + id + '/', { content })
                .then(response => {
                    setContent('');
                    if(file)
                    {
                        setFileName(response.data.id + '.' + fileExtension);
                        setFileUploaded(true);
                    }
                    setDisabled(true);
                })
                .catch(error => {
                    console.log(error);
                    setError(true);
                });
        } else {
            setError(true);
        }
    };

    const fetchAvatar = async () => {
        setAvatar(false);
        await axios.get("http://localhost:8080/v1/auth/student/files/" + id + ".png", {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                const images = response.data;
                setImages("http://localhost:8080/v1/auth/student/files/" + id + ".png");
                setAvatar(true);
            });
    }

    const fetchName = async () => {
        await axios
            .get('http://localhost:8080/v1/auth/student/' + id)
            .then(response => {
                setFirstName(response.data.lastName.toUpperCase());
                setFetched(false);
            })
    }

    useEffect(() => {
        fetchAvatar();
        fetchName();
        if (isFileUploaded) {
            uploadImage();
        }
    }, [isFileUploaded]);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    };

    const handlePostContentChange = (event) => {
        setContent(event.target.value);
    };



    return (
        <Card className={classes.root}>
           
                <>
                    <CardHeader
                        avatar={isAvatar ? (<Avatar className={classes.avatar} src={imagesUrl} />) : (<Avatar className={classes.avatar}>{Array.from(first_name)[0]}</Avatar>)}
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
                        <Grid item xs={4}>
                            <IconButton variant='plain' {...getRootProps()}>
                                <input {...getInputProps()} />
                                {isDragActive ? (<p>DROP ME HERE</p>) :(null)}
                                <AttachFileIcon sx={{ color: '#096DBE' }} />
                            </IconButton>
                        </Grid>
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
                    </CardActions></>
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
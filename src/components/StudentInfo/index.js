import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Cookies from "universal-cookie";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './studentinfo.css';

const cookies = new Cookies();
const token = cookies.get('token');
const id = cookies.get('userid');
console.log(id);

const useStyles = makeStyles((theme) => (
    {
        avatar:
        {
            width: theme.spacing(7),
            height: theme.spacing(7),
        },
    }));


export default function StudentInfo() {
    const classes = useStyles();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [apogeeNum, setApogeeNum] = useState();
    const [isFetched, setFetched] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:8080/v1/auth/student/' + id)

            .then(response => {
                setLastName(response.data.lastName);
                setFirstName(response.data.firstName);
                setEmail(response.data.email);
                setApogeeNum(response.data.apogeeNum);
                setFetched(true);
            })
            .catch(error => {
                console.error(error)
                setFetched(false);
            });

    }, []);

    return (
        <div>
            {isFetched ? (<Card variant="outlined" sx={{ backgroundColor: 'rgb(62,64,75)', display: 'flex', borderRadius: '15px', width: '250px', height: '250px' }}>
                <React.Fragment>
                    <CardContent>
                        <Avatar></Avatar>
                        <Typography variant="h7" component="div">
                            {first_name} {last_name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {email}
                        </Typography>
                        <Typography variant="body2">
                            {apogeeNum}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </React.Fragment>
            </Card>) : (null)}
        </div>
    );
}

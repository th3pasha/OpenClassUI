import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Cookies from "universal-cookie";
import Typography from '@material-ui/core/Typography';
import './studentinfo.css';

const cookies = new Cookies();
const token = cookies.get('token');
const id = cookies.get('userid');
console.log(id);

const useStyles = makeStyles((theme) => (
    {
        userInfo:
        {
            backgroundColor: theme.palette.grey[200],
        },
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


    useEffect(() => {
        axios.get('http://localhost:8080/v1/auth/student/' + id)

            .then(response => {
                setLastName(response.data.lastName);
                setFirstName(response.data.firstName);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <div>
            <div className="userinfo">
                <Avatar alt={first_name} src="/path/to/avatar.jpg" className="avatar" />
                <Typography variant="h6">{first_name} {last_name}</Typography>
            </div>
            <div>

            </div>
        </div>
    );
}
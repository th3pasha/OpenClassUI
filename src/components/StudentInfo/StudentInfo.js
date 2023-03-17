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
            backgroundColor: 'white',
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
    const [email, setEmail] = useState();
    const [apogeeNum, setApogeeNum] = useState();


    useEffect(() => {
        axios.get('http://localhost:8080/v1/auth/student/' + id)

            .then(response => {
                setLastName(response.data.lastName);
                setFirstName(response.data.firstName);
                setEmail(response.data.email);
                setApogeeNum(response.data.apogeeNum);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <div>
            <div className="userinfo">
                <Avatar></Avatar>
                <Typography variant="h6">{first_name} {last_name}</Typography>
                <Typography variant="h7">{email}</Typography>
                <Typography variant="h7">{apogeeNum}</Typography>
            </div>
            <div>

            </div>
        </div>
    );
}

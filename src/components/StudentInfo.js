import React, {useEffect, useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Cookies from "universal-cookie";
import Typography from '@material-ui/core/Typography';

const cookies = new Cookies();
const token = cookies.get('token');
const id = cookies.get('userid');
console.log(id);

const useStyles = makeStyles((theme) => (
{
    userInfo: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    avatar: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


export default function StudentInfo()
{
    const classes = useStyles();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();

    const headers = 
    {
        "Content-type": "application/json",
        "Authorization": 'Bearer ' + token
    };
    
    useEffect(() => 
    {
        axios.get('http://localhost:8080/v1/auth/student/'+ id, 
        {
            headers: 
            {
                headers
            }
        })
            .then(response => 
                {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
            })
            .catch(error => {
                console.error(error);
            });
        
    }, []);

    return (
        <div className={classes.userInfo}>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" className={classes.avatar} />
            <Typography variant="h6">{last_name} {first_name}</Typography>
            <Typography variant="subtitle1">Field</Typography>
            <Typography variant="subtitle2">Location</Typography>
        </div>
    );
}

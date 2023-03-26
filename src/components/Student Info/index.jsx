import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Avatar from '@mui/joy/Avatar';
import Cookies from "universal-cookie";
import Box from '@mui/material/Box';
import Chip from '@mui/joy/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StudentSkeleton from '../Skeletons/Student Skeleton';
import IconButton from '@mui/joy/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './studentinfo.css';

const cookies = new Cookies();
const token = cookies.get('token');
const id = cookies.get('userid');
console.log(id);

const useStyles = makeStyles((theme) => (
    {
        avatar:
        {
            position: 'relative',
            top: '2vh',
            left: '8vh',
        },
    }));


export default function StudentInfo() {
    const classes = useStyles();
    const [first_name, setFirstName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [apogeeNum, setApogeeNum] = useState();
    const [isFetched, setFetched] = useState(false);
    const [data, setData] = useState([]);
    const [images, setImages] = useState('');
    const [isAvatar, setAvatar] = useState(false);


    const fetchAvatar = async () => {
        setAvatar(false);
        await axios.get("http://localhost:8080/v1/auth/student/files/"+id+".png", {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                const images = response.data;
                setImages("http://localhost:8080/v1/auth/student/files/"+id+".png");
                setAvatar(true);
            });
    }

    const fetchStudent = async () => {
        setFetched(false);
        await axios.get('http://localhost:8080/v1/auth/student/' + id)
            .then(response => {
                setLastName(response.data.lastName);
                setFirstName(response.data.firstName);
                setEmail(response.data.email);
                setApogeeNum(response.data.apogeeNum);
                setFetched(true);
            })
            .catch(error => {
                console.error(error)
                setFetched(true);
            });
    }

    useEffect(() => {
        fetchStudent();
        fetchAvatar();
    }, []);

    return (
        <div>
            {isFetched ? (<Card variant="outlined" sx={{ backgroundColor: '#343A46', display: 'flex', borderRadius: '15px', width: '300px', height: '320px' }}>
                <React.Fragment>
                    <CardContent>
                        <Chip
                            size="sm"
                            variant="soft"
                            sx={{ alignSelf: 'flex-end', borderRadius: 'xl' }}
                        >
                            DAI
                        </Chip>
                        <IconButton
                            variant="filled"
                            size="sm"
                            sx={{ position: 'relative', top: '0.75rem', left: '20vh'}}
                            onClick={console.log('hhhhhhhhhh')}
                        >
                            <AccountBoxIcon sx={{ color:'#096BDE'}}/>
                        </IconButton>
                        {isAvatar ? (<Avatar sx={{ width: '100px', height: '100px', backgroundColor: '#BDBDBD' }} className={classes.avatar} src={images}></Avatar>)
                         :(<Avatar sx={{width: '100px', height: '100px', backgroundColor: '#BDBDBD', fontSize:'50px'}} className={classes.avatar} >{Array.from(first_name)[0]}</Avatar>)}
                        <Typography variant="h7" component="div" sx={{ color: '#EBECF0', position: 'relative', top:'4vh', left:'7vh' }}>
                            {first_name} {last_name}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "#FCF7F9" , position: 'relative', top:'7vh', left:'1vh'}} >
                            {email}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#FCF7F9" , position: 'relative', top:'7vh', left:'1vh'}}>
                            {apogeeNum}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    </CardActions>
                </React.Fragment>
            </Card>) : (<Card variant="outlined" sx={{ backgroundColor: 'rgb(62,64,75)', display: 'flex', borderRadius: '15px', width: '250px', height: '250px' }}>
                <StudentSkeleton />
            </Card>)}
        </div>
    );
}

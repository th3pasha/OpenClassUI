import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/joy/Box';
import { makeStyles } from '@material-ui/styles';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import Cookies from "universal-cookie";
import StudentsListSkeleton from '../Skeletons/Students List Skeleton';
import './studentslist.css';

const cookies = new Cookies();
const token = cookies.get('token');
const id = cookies.get('userid');
console.log(id);

const useStyles = makeStyles((theme) => ({
    students:
    {
        position: 'relative',
        top: '4px',
        left: '1vh',
    },
}));

export default function EllipsisList() {
    const [users, setUsers] = useState([]);
    const [isFetched, setFetched] = useState(false);
    const [images, setImages] = useState();
    const [isAvatar, setAvatar] = useState(false);
    const classes = useStyles();

    const fetchStudents = async () => {
        setFetched(false);
        await axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setUsers(response.data.content);
                setFetched(true);
            });
    }

    function fetchAvatars(id)
    {
        axios.get("http://localhost:8080/v1/auth/student/files/" + id + ".png")
            .then((response) => {
                if(response.status === 200)
                {
                    setAvatar(true);
                }
                else{
                    setAvatar(false);
                } 
            });

        if(isAvatar)
        {
            return "http://localhost:8080/v1/auth/student/files/" + id + ".png";
        }
    }


    useEffect(() => {
        fetchStudents();
    }, []);

    return (
        <Box className="students-box" sx={{ width: 350 }}>
            {isFetched ? (
                <div><Typography
                    id="ellipsis-list-demo"
                    className={classes.students}
                    sx={{fontSize:'18px', color:'#EBECF0'}}
                >
                    Students
                </Typography>
                    <List
                        aria-labelledby="ellipsis-list-demo"
                        sx={{ '--List-decoratorSize': '56px' }}
                    >
                        {users.map((user) =>
                            <ListItem>
                                <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                                    {isAvatar ? (<Avatar src={fetchAvatars(user.id)}>{Array.from(user.firstName)[0]}</Avatar>) :(<Avatar>{Array.from(user.firstName)[0]}</Avatar>)}
                                </ListItemDecorator>
                                <ListItemContent>
                                    <Typography
                                        sx = {{color:'#EBECF0'}} 
                                    >
                                        {user.firstName +' '+ user.lastName}
                                    </Typography>
                                    <Typography
                                        sx = {{color:'#BDBDBD'}} 
                                        level="body2" noWrap
                                    >
                                        {user.email}
                                    </Typography>
                                </ListItemContent>
                            </ListItem>

                        )}

                    </List></div>) : (<StudentsListSkeleton />)}

        </Box>
    );
}
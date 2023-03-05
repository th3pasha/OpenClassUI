import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { List, ListItem, ListItemText } from "@material-ui/core";
import { styled } from '@mui/material/styles';


export default function Student() {
    
    const [users, setUsers] = useState([]);
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#1A2027',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'white',
    }));
    
    useEffect(() => {
        axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setUsers(response.data.content);
            });
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={1}>
                {Array.isArray(users) && users.map((user) =>
                    <Item>
                        <Avatar alt={user.firstName} src="/path/to/avatar.jpg" className="theme" />
                        <ListItemText primary={user.firstName} secondary={user.email} />
                    </Item>
                )}
            </Stack>
        </Box>
    );
}
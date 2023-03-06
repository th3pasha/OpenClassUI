import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './students.css';
import { List, ListItem, ListItemText } from "@material-ui/core";


export default function Student() {

    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setUsers(response.data.content);
            });
    }, []);

    return (
        <Box  sx={{
            borderRadius: '15px',
            backgroundColor: 'white',
          }}>
            <Typography
            color='black'
            variant="h6"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
        >
               Students
        </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {users.map((user) =>
                    <ListItem alignItems="flex-start">
                        <Avatar alt={user.firstName} />
                        <ListItemText primary={user.firstName || user.lastName} secondary={<React.Fragment>
                            <Typography
                                sx={{ display: 'inline', fontColor:"black"}}
                                component="span"
                                variant="body2"
                                
                            >
                                {user.email}
                            </Typography>
                        </React.Fragment>} />
                    </ListItem>
                )}
            </List>
        </Box>
    );
}
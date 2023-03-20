import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import './studentslist.css';

export default function EllipsisList() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/v1/auth/student")
            .then((response) => {
                setUsers(response.data.content);
            });
    }, []);
    return (
        <Box className="students-box" sx={{ width: 350 }}>
            <Typography> </Typography>
            <Typography
                id="ellipsis-list-demo"
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
                            <Avatar src="/static/images/avatar/1.jpg" />
                        </ListItemDecorator>
                        <ListItemContent>
                            <Typography>{user.firstName || user.lastName}</Typography>
                            <Typography level="body2" noWrap>
                                {user.email}
                            </Typography>
                        </ListItemContent>
                    </ListItem>

                )}

            </List>
        </Box>
    );
}
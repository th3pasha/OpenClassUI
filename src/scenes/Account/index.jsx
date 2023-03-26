import React,{useState, useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Sidebar from '../../components/SideBar';
import Avatar from '@mui/joy/Avatar';
import Dropzone from '../../components/Dropzone';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Avatarzone from '../../components/Dropzone/Avatar';
import { Box, Chip, Typography, IconButton, Button } from '@mui/joy';
import Cookies from "universal-cookie";
import Security from '../../components/Tabs/Security';


const useStyles = makeStyles((theme) => ({
    body:
    {
        display: 'flex',
        backgroundColor: 'rgb(40,43,54)',
    },
    box:
    {
        backgroundColor: '#343A46',
        borderRadius: '15px',
        position: 'relative',
        top: '50vh',
        left: '6vh',
    },
    main:
    {
        position: 'absolute',
        width: '200vh',
        height: '100vh',
        backgroundColor: 'rgb(40,43,54)',
    },
    avatar:
    {
        position: 'relative',
        top: '20vh',
        left: '45vh',
        backgroundColor: '#343A46',
    },
    tabs:
    {
        top: '23vh',
        left: '35vh',
        backgroundColor: '#343A46',
    },
    info:
    {
        position: 'relative',
        top:'37vh',
        left:'31vh',
    },
    subheader:
    {
        position:'relative',
        left:'3vh',
    },
}));


export default function Account() {
    const classes = useStyles();
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [fetched, setFetched] = useState(false);
    const [images, setImages] = useState('');
    const [isAvatar, setAvatar] = useState(false);
    const cookies = new Cookies();
    const id = cookies.get('userid');

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
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
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
        <div className={classes.main}>
            <div>
                <Sidebar />
            </div>
            <div className={classes.body}>
                {isAvatar ? (<Avatar sx={{ width: '150px', height: '150px', backgroundColor: '#BDBDBD' }} src = {images} className={classes.avatar}></Avatar>) : (
                <Avatar sx={{ width: '150px', height: '150px', backgroundColor: '#BDBDBD', fontSize:'70px' }} className={classes.avatar}>{Array.from(first_name)[0]}</Avatar>) }
                <div className={classes.info}>
                    <Typography level= 'h4' sx={{color: '#EBECF0'}}>{first_name} {last_name}</Typography>
                    <Typography className={classes.subheader} level= 'h6'sx={{color: '#FCF7F9'}}>Student</Typography>
                </div>
                <Box className={classes.box} sx={{ width: 350, height: 350 }}>
                    <Avatarzone />
                </Box>
                <Tabs className={classes.tabs} defaultValue={0} sx={{ borderRadius: '15px', backgroundColor: '#343A46',  width: 800, height: 500 }}>
                    <TabList sx={{ borderRadius: '15px', backgroundColor: '#343A46' }}>
                        <Tab>Activity</Tab>
                        <Tab>Informations</Tab>
                        <Tab>Security</Tab>
                    </TabList>
                    <TabPanel>

                    </TabPanel>
                    <TabPanel value={1} sx={{ p: 2 }}>
                        <b>Second</b> tab panel
                    </TabPanel>
                    <TabPanel value={2} sx={{ p: 2 }}>
                        <Security />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}
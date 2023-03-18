import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Sidebar from '../../components/SideBar';


const useStyles = makeStyles((theme) => ({


}));


export default function Account()
{
    const classes = useStyles();

    return (
        <div>
            <div>
                <Sidebar/>
            </div>
            <div className={classes.body}>

            </div>
        </div>
    );
}
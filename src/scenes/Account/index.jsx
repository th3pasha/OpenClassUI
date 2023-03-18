import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Sidebar from '../../components/SideBar';
import Dropzone from '../../components/Dropzone';

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
                <Dropzone/>
            </div>
        </div>
    );
}
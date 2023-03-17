import React from 'react';
import StudentInfo from '../../../components/StudentInfo';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@mui/material';
import StudentsList from '../../../components/Students';
import Post from '../../../components/Post';
import Posts from '../../../components/Posts';
import Speed from '../../../components/Speedial';
import Appbar from '../../../components/Appbar';
import Sidebar from '../../../components/SideBar';
import './homepage.css';

const useStyles = makeStyles((theme) => ({
}));

export default function HomePage() {

  const classes = useStyles();


  return (
    <div className='homepageclass'>
      <header>
        <Sidebar />
      </header>
      <main className={classes.main}>
        <div className='mainpageclass'>
          <div className='studentinfo'>
            <StudentInfo />
          </div>
          <div className='post'>
            <Post />
          </div>
          <div className='posts'>
            <Posts />
          </div>
          <div className='studentslist'>
            <StudentsList />
          </div>
            <Speed />
        </div>
      </main>
      <footer>
          
      </footer>
    </div>

  );
}

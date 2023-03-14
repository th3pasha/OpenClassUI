import React from 'react';
import StudentInfo from '../../../components/StudentInfo/StudentInfo';
import { Container, Grid } from '@mui/material';
import StudentsList from '../../../components/Students';
import Post from '../../../components/Post';
import Posts from '../../../components/Posts';
import Speed from '../../../components/Speedial';
import Appbar from '../../../components/Appbar';
import Sidebar from '../../../components/SideBar';
import './homepage.css';

export default function HomePage() {
  return (

    <div>
      <header>
        <Sidebar />
      </header>
      <main>
      <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={15} md={3} sx={{position:'fixed', top: '2' , left: '0'}}>
              
            </Grid>
            <Grid item xs={20} md={16}>
              <Grid container spacing={5}>
                <Grid item xs={20} md={30} className="post">
                  <Post />
                </Grid>
                <Grid item xs={12} md={18}>
                  <Posts />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3} sx={{position:'fixed', top: '150' , right: '0'}}>
              <StudentsList />
            </Grid>
          </Grid>
        </Container>
        <div className='speedial'>
          <Speed />
        </div>
      </main>
    </div>

  );
}

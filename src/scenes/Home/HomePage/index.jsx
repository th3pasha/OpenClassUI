import React from 'react';
import StudentInfo from '../../../components/StudentInfo';
import StudentsList from '../../../components/StudentsList';
import Post from '../../../components/Post';
import Posts from '../../../components/Posts';
import Speed from '../../../components/Speedial';
import Sidebar from '../../../components/SideBar';
import Marketing from '../../../components/Marketing';
import './homepage.css';


export default function HomePage() {

  return (
    <div className='homepageclass'>
      <header>
        <Sidebar />
      </header>
      <main>
        <div className='mainpageclass'>
          <div className='studentinfo'>
            <StudentInfo />
          </div>
          <div className='marketing-overview'>
            <Marketing />
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

import React from 'react';
import StudentInfo from '../../../components/Student Info';
import StudentsList from '../../../components/Students List';
import Post from '../../../components/Post';
import Posts from '../../../components/Posts';
import Speed from '../../../components/Speedial';
import Sidebar from '../../../components/SideBar';
import Marketing from '../../../components/Marketing';
import Todo from '../../../components/Todo';
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
          <div className='todo'>
            <Todo />
          </div>
          <div className='post'>
            <Post />
          </div>
          <div className='posts'>
            <Posts />
          </div>
          <div className='marketing-overview'>
            <Marketing />
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

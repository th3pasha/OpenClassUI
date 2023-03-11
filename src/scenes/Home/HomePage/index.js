import React from 'react';
import Navbar from '../../Navbar';
import StudentInfo from '../../../components/StudentInfo/StudentInfo';
import Speed from '../../../components/Speedial';
import './homepage.css';

export default function HomePage() {
  return (

    <div>
      <header>
        <Navbar />
        <div className='speedial'>
          <Speed />
        </div>
      </header>
      <main>

      </main>
    </div>

  );
}

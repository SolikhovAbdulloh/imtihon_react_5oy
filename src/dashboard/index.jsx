import React from 'react'
import {Outlet} from 'react-router-dom';
import Sidebar from './sidebar';


function Dashboard() {
  return (
    <div className='flex'>

      <Sidebar/>
      <div className='py-4 px-4'>
        <h1>Dashboard</h1>
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard
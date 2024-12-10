import React from 'react'
import Navbar from '../components/navbar'
import { Outlet } from "react-router-dom";
import Footer from '../components/footer';

function Layout() {
  return (
    <div className='contiener'>

    <Navbar/>
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
    <Footer/>
    </div>
  )
}

export default Layout
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:min-h-[calc(100vh-100px)] xl:min-h-[calc(100vh-200px)] w-11/12 mx-auto'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout

import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const MainLayout = () => {
    return (
        <div>
            <div>
                <div className='bg-base-200'>
                    <Navbar></Navbar>
                </div>
                <div className='border border-blue-500 lg:min-h-[calc(100vh-300px)] xl:min-h-[calc(100vh-200px)] '>
                    <Outlet />
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default MainLayout

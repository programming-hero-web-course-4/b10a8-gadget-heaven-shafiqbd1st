import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { NavLink, useLocation } from 'react-router-dom'
import { MainContext } from '../MainProvider/MainProvider'

const Navbar = () => {
    const { cart, wish } = useContext(MainContext);


    // console.log(cart.length);
    const links = <>
        <li><NavLink to='/' className={({ isActive }) => ` text-lg ${isActive ? 'underline underline-offset-4' : ''}`}>Home</NavLink></li>
        <li><NavLink to='/statistics' className={({ isActive }) => ` text-lg ${isActive ? 'underline underline-offset-4' : ''}`}>Statistics</NavLink></li>
        <li><NavLink to='/dashboard' className={({ isActive }) => ` text-lg ${isActive ? 'underline underline-offset-4' : ''}`}>Dashboard</NavLink></li>
        <li><NavLink to='/Brand' className={({ isActive }) => ` text-lg ${isActive ? 'underline underline-offset-4' : ''}`}>Our Brands</NavLink></li>
    </>

    const location = useLocation();
    // console.log(location.pathname)

    return (
        <div className='backdrop-blur-xl bg-white/50 p-3 border-2 border-blur-2xl relative' >

            <div className={(location.pathname == '/' || location.pathname.slice(1, 9) == 'category') ? 'pt-3 bg-[#9538E2] text-white overflow-hidden rounded-2xl' : 'pt-3'}>
                <div className="navbar w-11/12 mx-auto px-0 py-0">
                    <div className="navbar-start">
                        <NavLink className={location.pathname !== '/' ? " text-xl font-bold lg:text-2xl text-[#9538E2]" : 'text-xl font-bold lg:text-2xl'}>Gadget Heaven</NavLink>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-3">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='space-x-2'>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-base-300 mr-3">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 lg:size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>

                                    <span className="badge badge-2xl indicator-item text-lg py-4">{cart.length}</span>
                                </div>

                            </div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle bg-base-300">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" size-5 lg:size-8 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                    <span className="badge badge-2xl indicator-item text-lg py-4">{wish.length} </span>
                                </div>

                            </div>
                        </div>
                        {/*  */}

                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 border border-base-200 overflow-hidden shadow gap-3 right-0">
                                <div className={(location.pathname == '/' || location.pathname.slice(1, 9) == 'category') ? 'rounded-lg bg-[#9538E2] text-white overflow-hidden' : ''}>

                                    {links}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* This is banner section */}
                {
                    (location.pathname == '/' || location.pathname.slice(1, 9) == 'category') && <div>
                        <div className='w-11/12 mx-auto flex flex-col justify-center items-center px-1 pt-3 pb-5 lg:px-20 lg:pt-12 lg:pb-52 text-center space-y-2 lg:space-y-4'>
                            <h1 className='text-lg lg:text-4xl xl:text-5xl font-bold '>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                            <p className='text-gray-300 text-xs lg:text-md xl:text-lg'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                            <button className="btn rounded-full">Shop Now</button>
                        </div>
                    </div>
                }
            </div>
            {
                (location.pathname == '/' || location.pathname.slice(1, 9) == 'category') && <div className='hidden lg:block w-7/12 mx-auto bg-white/50  p-2 border-2 border-blur-2xl rounded-xl   xl:h-96 absolute lg:-bottom-52  lg:left-52 xl:left-64'>
                    <img src="https://i.ibb.co.com/fvFrDWn/banner.jpg" alt="" className='rounded-xl w-full h-full' />
                </div>
            }
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar

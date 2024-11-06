import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLoaderData, useLocation } from 'react-router-dom'
import Card from '../Card/Card';
import AllCards from '../AllCards/AllCards';

const Home = () => {

    useEffect(() => {
        document.title = 'home'
    }, [])
    const categories = useLoaderData();

    return (
        <div className='w-11/12 mx-auto mt-5 lg:mt-64 pb-5'>
            <h1 className='text-2xl lg:text-4xl text-center font-bold text-[#9538E2]'>Explore Cutting-Edge Gadgets</h1>
            <div className='my-5'>
                <div className='grid grid-cols-2 lg:grid-cols-12 gap-4 place-content-start'>
                    <div className='col-span-1 place-self-start lg:col-span-2 p-1 flex flex-col gap-3 justify-center items-center '>
                        {
                            categories.map(category => <NavLink key={category.id} to={`/category/${category.category}`} className={({ isActive }) => ` ${isActive ? 'btn w-full px-2 text-md bg-[#9538E2] text-white' : 'btn w-full text-md'}`} >{category.category}</NavLink>)
                        }
                    </div>
                    <div className='col-span-1 lg:col-span-10 '>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home

import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='w-11/12 mx-auto mt-64 border border-red-300'>
            <h1 className='text-4xl text-center font-bold text-[#9538E2]'>Explore Cutting-Edge Gadgets</h1>
            <div className='my-5'>
                <div className='grid grid-cols-2 lg:grid-cols-12 gap-4 p'>
                    <div className='col-span-1 lg:col-span-2 p-2  border border-yellow-300 flex flex-col gap-3  justify-center items-center '>

                        <NavLink className="btn w-full text-md"> All </NavLink>
                        <NavLink className="btn w-full text-md">Laptops</NavLink>
                        <NavLink className="btn w-full text-md">Accessories</NavLink>
                        <NavLink className="btn w-full text-md">Phones</NavLink>
                        <NavLink className="btn w-full text-md"> Smart Watches</NavLink>


                    </div>
                    <div className='col-span-1 lg:col-span-10 border border-blue-300'>google</div>
                </div>
            </div>
        </div>
    )
}

export default Home

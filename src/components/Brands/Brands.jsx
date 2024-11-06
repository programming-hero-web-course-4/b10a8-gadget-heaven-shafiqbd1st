import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../MainProvider/MainProvider';
import Brand from '../Brand/Brand';
const Brands = () => {
    useEffect(() => {
        document.title = 'Brands'
    }, [])

    const { brand, setBrand, } = useContext(MainContext);
    return (
        <div className='w-11/12 mx-auto my-8'>
            <h1 className='text-center text-3xl text-[#9538E2] font-bold'> Our Brands</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-4'>
                {
                    brand.map((b, idx) => <Brand key={idx} b={b}></Brand>)
                }
            </div>
        </div>
    )
}

export default Brands

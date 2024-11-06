import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'
import { MainContext } from '../MainProvider/MainProvider'
const Statistics = props => {
    const { data } = useContext(MainContext);

    useEffect(() => {
        document.title = 'statistics'
    }, [])

    return (
        <div className='w-11/12 mx-auto mb-4  bg-base-200 rounded-lg'>

            <div className=' bg-[#9538E2] rounded-lg flex flex-col justify-center items-center px-1 pt-3 pb-5 lg:px-20 lg:pt-12 lg:pb-8 text-center space-y-2 lg:space-y-4 '>
                <h1 className='text-lg lg:text-4xl xl:text-5xl font-bold text-white'>Statistics</h1>
                <p className='text-gray-300 text-xs lg:text-md w-8/12'>Explore our tech collection: high-performance laptops, smartwatches, mobile phones, and accessories designed to enhance productivity, connectivity, and style.</p>
            </div>

            <h1 className='text-2xl font-bold p-3'>Statistics</h1>
            <div className=' flex justify-center items-center py-5'>
                <BarChart width={1130} height={400} data={data} className='bg-white p-4 rounded-xl'>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="product_title" />
                    <YAxis dataKey="price" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    )
}

Statistics.propTypes = {

}

export default Statistics

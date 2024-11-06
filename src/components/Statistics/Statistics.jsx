import React from 'react'
import PropTypes from 'prop-types'

const Statistics = props => {
    return (
        <div className='w-11/12 mx-auto mb-20'>

            <div className=' bg-[#9538E2] rounded-lg flex flex-col justify-center items-center px-1 pt-3 pb-5 lg:px-20 lg:pt-12 lg:pb-8 text-center space-y-2 lg:space-y-4 '>
                <h1 className='text-lg lg:text-4xl xl:text-5xl font-bold text-white'>Statistics</h1>
                <p className='text-gray-300 text-xs lg:text-md w-8/12'>Explore our tech collection: high-performance laptops, smartwatches, mobile phones, and accessories designed to enhance productivity, connectivity, and style.</p>
            </div>


        </div>
    )
}

Statistics.propTypes = {

}

export default Statistics

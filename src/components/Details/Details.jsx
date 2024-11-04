import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'

const Details = props => {
    const { Id } = useParams();
    const data = useLoaderData()

    const [product, setProduct] = useState({});
    useEffect(() => {
        const newProduct = data.find(item => item.product_id == Id);
        setProduct(newProduct)
    }, [data, Id])

    const {
        product_id,
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating
    } = product;

    return (
        <div className='relative bg-[#9538E2] w-full mb-20'>
            <div className='w-11/12 mx-auto flex flex-col justify-center items-center px-1 pt-3 pb-5 lg:px-20 lg:pt-12 lg:pb-52 text-center space-y-2 lg:space-y-4 '>
                <h1 className='text-lg lg:text-4xl xl:text-5xl font-bold text-white'>Product Details</h1>
                <p className='text-gray-300 text-xs lg:text-md xl:text-lg'>Explore our tech collection: high-performance laptops, smartwatches, mobile phones, and accessories designed to enhance productivity, connectivity, and style.</p>
            </div>

            <div className='w-7/12 mx-auto  bg-white/50  p-2 border-2 border-blur-2xl rounded-xl xl:h-96 absolute lg:-bottom-52  lg:left-52 xl:left-64  border-red-500'>
                <div className='flex justify-center gap-4 bg-base-300'>
                    <div className='flex-1 h-[350px]'>
                        <img src={product_image} alt="" className=' h-full rounded-xl' />
                    </div>
                    <div className='flex-1'>
                        <h1>{product_title}</h1>
                        <p>Price: $ {price}</p>
                        <button className="btn bg-green-300 border border-green-500 rounded-full ">In Stock</button>
                        <p className='text-slate-400'>{description}</p>
                        <h3 className='font-bold'>Specification:</h3>
                        <ul>
                            {specification && specification.length > 0 ? (
                                specification.map((spec, index) => (
                                    <li key={index} className='list-decimal list-inside'>{spec}</li>
                                ))
                            ) : (
                                <li>No specification available</li>
                            )}

                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

Details.propTypes = {

}

export default Details

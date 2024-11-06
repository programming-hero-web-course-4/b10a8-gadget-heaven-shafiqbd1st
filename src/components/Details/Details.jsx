import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useLoaderData, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Stars from 'react-stars';
import { MainContext } from '../MainProvider/MainProvider'

const Details = props => {

    useEffect(() => {
        document.title = 'product-details'
    }, [])

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
        price,
        description,
        specification,
        availability,
        rating
    } = product;

    const { cart, setCart, wish, setWish, notify, addToCart } = useContext(MainContext);

    const [active, setActive] = useState(false);

    // const addToCart = product => {

    //     const newCart = cart.find(p => p == product)
    //     if (newCart) {

    //         notify('error', "cart already added")
    //     } else {
    //         setCart([...cart, product]);
    //         notify('success', 'cart add successfully')
    //     }
    // }
    const addToWishList = product => {

        notify('success', 'This cart add successfully wish list')
        setWish([...wish, product]);
        setActive(!active)
    }




    return (

        <div className='relative bg-[#9538E2] w-11/12 rounded-lg mx-auto mb-20'>
            <div className='w-11/12 mx-auto flex flex-col justify-center items-center px-1 pt-3 pb-5 lg:px-20 lg:pt-12 lg:pb-52 text-center space-y-2 lg:space-y-4 '>
                <h1 className='text-lg lg:text-4xl xl:text-5xl font-bold text-white'>Product Details</h1>
                <p className='text-gray-300 text-xs lg:text-md xl:text-lg'>Explore our tech collection: high-performance laptops, smartwatches, mobile phones, and accessories designed to enhance productivity, connectivity, and style.</p>
            </div>

            <div className='w-8/12 h-[500px]  mx-auto grid grid-cols-12 border-2 border-[#9538E2] absolute -bottom-80 left-52 p-3 rounded-xl  bg-white/50 '>

                <div className='col-span-5 h-[450px] flex justify-center items-center bg-base-100 rounded-xl p-3'>
                    <img className='h-full rounded-xl' src={product_image} alt="" />
                </div>

                <div className='col-span-7  bg-base-200 rounded-xl p-3 flex flex-col items-start justify-between '>

                    <h1>{product_title}</h1>
                    <p>Price: $ {price}</p>
                    <button className="btn btn-xs bg-green-300 border border-green-500 rounded-full">{availability ? 'In Stock' : 'Out of Stock'}</button>

                    <p className='text-slate-600'>{description}</p>
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
                    {/* <FaStar />
                    <p className='flex items-center gap-3 '>Raging: <span className='ml-2 text-yellow-300 flex'>

                        <FaStarHalfAlt /> </span > <button className="btn btn-xs text-lg"> {rating} </button> </p> */}
                    <p className='flex items-center gap-3 '>Raging:  <Stars
                        count={5}
                        value={rating}
                        size={24}
                        half={true} // Enables half-stars
                        color2={"#ffd700"}
                    /> <button className="btn btn-xs text-lg"> {rating} </button> </p>

                    <div className='flex gap-3'>
                        <button onClick={() => addToCart(product)} className="btn bg-[#9538E2] text-white rounded-xl">Add to Cart <span className='ml-1 text-lg'><FaCartShopping /></span></button>
                        <button disabled={active} onClick={() => addToWishList(product)} className="btn btn-md bg-white  rounded-full hover:bg-red-400 "><span className='text-lg'><CiHeart /></span></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

Details.propTypes = {

}

export default Details

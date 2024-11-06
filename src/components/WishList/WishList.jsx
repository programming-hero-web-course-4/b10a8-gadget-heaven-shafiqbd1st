import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { MainContext } from '../MainProvider/MainProvider';


const WishList = ({ p }) => {
    const {
        product_id,
        product_title,
        product_image,
        price,
        description,
        specification,
        availability,
        rating
    } = p;

    const { cart, setCart, wish, setWish, notify, addToCart } = useContext(MainContext)


    return (
        <div>
            <div className='px-3'>
                <div className='flex justify-between items-center border border-blue-300 rounded-xl p-3 my-2'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='w-28 h-28'>
                            <img className='w-full h-full ' src={product_image} alt="" />
                        </div>
                        <div className='space-y-2'>
                            <h2 className='text-md font-bold ml-1'>{product_title}</h2>
                            <h2 className='text-gray-400 ml-1'>{description}</h2>
                            <h2 className='font-bold text-xs ml-1'>Price: ${price}</h2>
                            <button className="btn bg-[#9538E2] text-white rounded-xl btn-md ">Add to Cart</button>
                        </div>
                    </div>

                    <div>
                        <button className="text-3xl px-2 text-red-400"><RxCross2 /></button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WishList

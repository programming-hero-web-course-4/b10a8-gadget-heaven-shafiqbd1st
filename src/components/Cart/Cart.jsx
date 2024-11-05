import React from 'react'

import { RxCross2 } from "react-icons/rx";
const Cart = ({ p }) => {
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

    return (
        <div>
            <div className='px-3'>
                <div className='flex justify-between items-center border border-blue-300 rounded-xl p-3 my-2'>
                    <div className='flex items-center gap-4 justify-between'>
                        <div className='w-28 h-28'>
                            <img className='w-full h-full ' src={product_image} alt="" />
                        </div>
                        <div>
                            <h2 className='text-md font-bold'>{product_title}</h2>
                            <h2 className='text-gray-400'>{description}</h2>
                            <h2 className='font-bold text-xs'>Price: ${price}</h2>
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

export default Cart

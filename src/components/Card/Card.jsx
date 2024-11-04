import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
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
    } = item;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl border border-[#9538E2]">

                <div className='h-44 mx-auto p-4 flex flex-col justify-center items-center overflow-hidden '>
                    <img src={product_image} className='w-full h-full rounded-xl' />
                </div>

                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: ${price}</p>
                    <div className="card-actions">
                        <Link to={`/product-details/${product_id}`} className="btn text-[#9538E2] rounded-full border border-[#9538E2]">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {

}

export default Card

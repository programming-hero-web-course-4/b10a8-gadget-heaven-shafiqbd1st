import React from 'react'
import { Link } from 'react-router-dom';

const Brand = ({ b }) => {
    const { name, logo, description, link } = b;
    return (
        <div className='w-11/12 mx-auto '>
            <div className="card card-compact bg-base-100 border border-[#9538E2] rounded-xl py-3">
                <figure className='h-full' >
                    <img className='h-36'
                        src={logo}
                        alt={name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name} </h2>
                    <p> {description} </p>
                    <div className="card-actions justify-end">
                        <Link to={link} className="btn bg-[#9538E2] rounded-xl text-white">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand

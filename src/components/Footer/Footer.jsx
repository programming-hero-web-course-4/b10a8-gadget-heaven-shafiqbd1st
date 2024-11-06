import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
    const val = location.pathname.slice(1, 8);
    return (
        <div className={val == 'product' ? 'mt-80' : 'bg-base-200'}>
            <div className='w-7/12 mx-auto py-10 text-center space-y-8'>
                <div>
                    <h1 className='text-3xl font-bold'>Gadget Heaven</h1>
                    <p className='text-gray-500'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Services</h1>
                        <ul className='space-y-1'>
                            <li>Product Support </li>
                            <li>Order Tracking </li>
                            <li>Shipping & Delivery </li>
                            <li>Returns</li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Company</h1>
                        <ul className='space-y-1'>
                            <li>About Us</li>
                            <li> Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='space-y-2'>
                        <h1 className='font-bold'>Legal</h1>
                        <ul className='space-y-1'>
                            <li>Terms of Service </li>
                            <li>Privacy Policy </li>
                            <li>Cookie Policy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer

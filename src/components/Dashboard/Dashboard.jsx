import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { MainContext } from '../MainProvider/MainProvider'
import Cart from '../Cart/Cart';
import WishList from '../WishList/WishList';
import { HiAdjustments } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
    useEffect(() => {
        document.title = 'dashboard'
    }, [])
    const {
        cart, setCart,
        wish, setWish,
        data, setData,
        cost, setCost,

    } = useContext(MainContext);

    const [active, setActive] = useState({ cart: true });

    const [pActive, setPActive] = useState(false);

    useEffect(() => {
        if (cart.length == 0) {
            setPActive(true);
        }
    }, [cart.length])

    const activeBtn = (value) => {
        if (value == 'cart') {
            setActive({ cart: true })
        } else {
            setActive({ cart: false })
        }
    }

    const [sortCart, setSortCart] = useState(cart)

    const sortCartData = () => {
        const temp = [...cart].sort((cart1, cart2) => cart2.price - cart1.price);
        setSortCart(temp);
    }

    const modalRef = useRef(null)

    const purchase = () => {
        modalRef.current.showModal();
    };


    const closeModal = () => {
        setCart([]);
        setCost(0);
        modalRef.current.close();
    };


    return (
        <div className=' w-11/12 mx-auto mb-10' >
            <div className='bg-[#9538E2] rounded-lg'>
                <div className='flex flex-col justify-center items-center px-1 pt-3 pb-5 lg:px-20 lg:pt-12 lg:pb-5 text-center space-y-2 lg:space-y-4 '>
                    <h1 className='text-lg lg:text-4xl xl:text-5xl font-bold text-white'>Dashboard</h1>
                    <p className='text-gray-300 text-xs lg:text-md xl:text-lg'>Explore our tech collection: high-performance laptops, smartwatches, mobile phones, and accessories designed to enhance productivity, connectivity, and style.</p>
                    <div className='flex gap-4 '>
                        <button onClick={() => activeBtn('cart')} className={active.cart ? 'btn bg-white text-[#9538E2] px-5 font-bold text-xl rounded-full border-2 border-[#9538E2]' : 'btn px-5 font-bold text-xl rounded-full border-2'}>Cart</button>
                        <button onClick={() => activeBtn('wish')} className={active.cart ? 'btn px-5 font-bold text-xl rounded-full border-2' : 'btn bg-white text-[#9538E2] px-5 font-bold text-xl rounded-full border-2 border-[#9538E2]'}>Wishlist</button>
                    </div>
                </div>
            </div>

            <div>
                {
                    active.cart ? <div className='flex justify-between items-center py-5 px-2'>
                        <div className='text-xl font-bold'>Cart</div>
                        <div className='flex justify-end items-center gap-4'>
                            <h1 className='text-xl font-bold mr-10'>Total cost: $ {cost} </h1>
                            <button onClick={() => sortCartData()} className="btn text-lg hover:bg-[#9538E2] rounded-full hover:text-white">Sort by Price <span><HiAdjustments /></span> </button>
                            <button onClick={() => purchase()} disabled={pActive} className="btn text-lg hover:bg-[#9538E2] rounded-full hover:text-white">Purchase</button>

                        </div>
                    </div>
                        : <div className='text-xl font-bold  py-5 px-2'>Wish List</div>
                }
            </div>
            <div>
                {
                    active.cart ? sortCart.map((p, id) => <Cart key={id} p={p}></Cart>) : wish.map((p, id) => <WishList key={id} p={p}></WishList>)
                }
            </div>


            <dialog ref={modalRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex flex-col justify-center items-center gap-4 text-center'>
                        <img src="https://i.ibb.co.com/1LLhJ63/Group.png" alt="" />
                        <h3 className="font-bold text-lg">Payment Successfully!</h3>
                        <p>Thanks for purchasing.</p>
                        <p>Total: $ {cost} </p>
                    </div>
                    <div className="modal-action flex-col">
                        <Link to="/"
                            onClick={closeModal}
                            className="btn w-full px-4"
                        >
                            Close
                        </Link>
                    </div>
                </div>
            </dialog>

        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
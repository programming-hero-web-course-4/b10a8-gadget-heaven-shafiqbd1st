import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainContext = createContext(null);


const MainProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [wish, setWish] = useState([]);
  const [brand, setBrand] = useState([]);
  const [cost, setCost] = useState(0);

  // const [active, setActive] = useState(false);

  const notify = (value, message) => {
    if (value == 'success')
      toast.success(`${message}`);
    else
      toast.error(`${message}`)

  };
  const addToCart = product => {

    const newCart = cart.find(p => p == product)
    if (newCart) {

      notify('error', "cart already added")
    } else {
      setCart([...cart, product]);
      notify('success', 'cart add successfully')
    }
  }

  // const addToWishList = product => {

  //   notify('success', 'This cart add successfully wish list')
  //   setWish([...wish, product]);
  //   setActive(!active)
  // }

  useEffect(() => {
    fetch('/brands.json')
      .then(res => res.json())
      .then(data => setBrand(data))
  }, [])

  useEffect(() => {
    fetch('/gadgetHeaven.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  useEffect(() => {
    const total = cart.reduce((pev, item) => pev + item.price, 0);
    setCost(total)
  }, [cart])



  const contextValue = {
    cart, setCart,
    data, setData,
    wish, setWish,
    notify,
    cost, setCost,
    brand, setBrand,
    // active,
    addToCart,
    // addToWishList,
  }

  return (
    <MainContext.Provider value={contextValue}>
      {children}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </MainContext.Provider>
  )
}

export default MainProvider

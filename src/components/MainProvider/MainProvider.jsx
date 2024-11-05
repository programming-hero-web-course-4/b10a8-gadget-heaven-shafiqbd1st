import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MainContext = createContext(null);


const MainProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);
  const [wish, setWish] = useState([]);
  const [cost, setCost] = useState(0);

  const notify = (value, message) => {
    if (value == 'success')
      toast.success(`${message}`);
    else
      toast.error(`${message}`)

  };


  useEffect(() => {
    fetch('../gadgetHeaven.json')
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
    cost,
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

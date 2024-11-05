import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Routes/Routes'
import MainProvider from './components/MainProvider/MainProvider'
import React from 'react';
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <RouterProvider router={router}></RouterProvider>
  // </StrictMode>,

  <React.StrictMode>
    <MainProvider>
      <RouterProvider router={router}> </RouterProvider>
    </MainProvider>
  </React.StrictMode>
)

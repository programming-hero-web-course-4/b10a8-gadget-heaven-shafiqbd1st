import React, { useEffect } from 'react'

const ErrorPage = () => {

    useEffect(() => {
        document.title = 'error'
    }, [])

    return (
        <div className='w-11/12 mx-auto my-16'>
            <h1 className='text-5xl text-center font-bold text-[#9538E2]'>Oops!</h1>
            <p className='text-xl text-center'>Sorry, an unexpected error has occurred.</p>
        </div>
    )
}

export default ErrorPage

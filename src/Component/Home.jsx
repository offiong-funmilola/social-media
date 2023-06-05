import React from 'react'
import Menu from './Menu'

function home() {
  return (
    <div className='w-full h-screen bg-white'>
        <Menu />
        <div className='w-full flex flex-col justify-center items-center h-96  bg-blue-50'>
            <h1 className='font-sans text-3xl font-semibold'>Be Together, Anywhere</h1>
            <p className='font-sans text-xl'>A community you will love to be, join us and let get the real experience</p>
            <div className='w-full flex items-center justify-center gap-5 mt-3'>
                <button type='button' className='bg-orange-600 text-white text-lg w-36 p-3'>About SociNet</button>
                <button type='button' className='text-orange-600 bg-white text-lg w-36 p-3'>Invite a Friend</button>
            </div>
        </div>
        <div className='bg-white mt-10 flex flex-col items-center'>
            <h1 className='font-sans text-3xl font-semibold'>Why Choose us?</h1>
            <p className='font-sans text-xl'>We connect to grow relationship</p>
        </div>
    </div>
  )
}

export default home

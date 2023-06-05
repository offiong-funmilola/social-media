import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FaTimes, FaBars, FaThumbsUp} from 'react-icons/fa'


function Menu() {
    const [show, setShow] = useState(false)
    const handleShow = (e) => {
        setShow(!show)
    }
  return (
    <>
    <nav className='w-full h-20 px-10 flex items-center justify-between bg-orange-600'>
        <div className='flex gap-2'>
            <Link to='/'>
                <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                    <FaThumbsUp className='text-xl text-orange-600'/>
                </div>
            </Link>
            <p className='text-lg text-white font-sans first-line:font-semibold'>SociNet</p>
        </div>
        <div className='hidden md:flex md:gap-2'>
            <Link to='/' className='text-lg text-white font-sans font-semibold px-3 py-1'>Home</Link>
            <Link to='/about' className='text-lg font-sans font-semibold text-white px-3 py-1'>About Us</Link>
            <Link to='/login' className='text-lg text-white font-sans font-semibold px-3 py-1'>Log In</Link>
            <Link to='/signup' className='text-lg font-sans font-semibold px-3 py-1 text-white'>Sign Up</Link>
        </div>
        <div className='block bg-white w-8 h-8 md:hidden'>{show ? <FaTimes className='w-8 h-8 bg-white text-gray-700' onClick={handleShow}/> : <FaBars className='w-8 h-8 font-bold text-gray-700' onClick={handleShow}/>}</div>   
    </nav>
    <div className={show ? 'bg-white hover:text-yellow-400 font-sans z-10 absolute right-10' : 'hidden'}>
        <Link to='/' className='block text-lg text-black px-3 py-1 hover:text-yellow-400 hover:bg-white' onClick={handleShow}>Home</Link>
        <Link to='/about' className='block text-lg font-sans text-black px-3 py-1 hover:text-yellow-400 hover:bg-white' onClick={handleShow}>About Us</Link>
        <Link to='/form' className='block text-lg text-black px-3 py-1 hover:text-yellow-400 hover:bg-white' onClick={handleShow}>Donate</Link>
        <Link to='/patner' className='block text-lg text-black px-3 py-1 hover:text-yellow-400 hover:bg-white' onClick={handleShow}>Patner</Link>
        <Link to='/contact' className='block text-lg text-black px-3 py-1 hover:text-yellow-400 hover:bg-white' onClick={handleShow}>Contact Us</Link>
    </div>
</>
  )
}

export default Menu
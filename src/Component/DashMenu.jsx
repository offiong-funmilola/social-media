import React from 'react'
import {FaThumbsUp, FaSearch, FaHouseUser, FaFolder, FaCommentDots, FaCaretDown, FaBell, FaUserFriends} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function DashMenu() {
  return (
        <nav className='w-full h-20 flex items-center bg-orange-600 px-20'>
            <div className='flex gap-4 items-center'>
                <Link to='/'>
                    <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
                        <FaThumbsUp className='text-xl text-orange-600'/>
                    </div>
                </Link>
                <div className='relative w-50 h-12 bg-white'>
                    <input type='text' placeholder='search' className='p-3'/>
                    <FaSearch className='absolute top-0 right-3 translate-y-5 text-gray-300'/>
                </div>
            </div>
            <div className='flex ml-auto bg-inherit gap-4 text-white h-full items-center'>
                <Link className='flex flex-col gap-1 items-center'>
                    <FaHouseUser className='text-xl'/>
                    <p>Home</p>
                </Link>
                <Link className='flex flex-col gap-1 items-center'>
                    <FaUserFriends className='text-xl'/>
                    <p>My Network</p>
                </Link>
                <Link className='flex flex-col gap-1 items-center'>
                    <FaFolder className='text-xl'/>
                    <p>Jobs</p>
                </Link>
                <Link className='flex flex-col gap-1 items-center'>
                    <FaCommentDots className='text-xl'/>
                    <p>Messaging</p>
                </Link>
                <Link className='flex flex-col gap-1 items-center'>
                    <FaBell className='text-xl'/>
                    <p>Notification</p>
                </Link>
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-6 h-6 rounded-full border-2 bg-white'></div>
                    <div className='flex'>
                        <p>Me</p>
                        <FaCaretDown className='mt-1'/>
                    </div>
                    
                </div>
            </div>

        </nav>

    )
}

export default DashMenu
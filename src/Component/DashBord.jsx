import React from 'react'
import {useContext} from 'react'
import FormContext from '../Context/FormContext'
import { doc, getDoc } from "firebase/firestore";
import {db} from './Config/firebase'
import DashMenu from './DashMenu';
import {FaPlus, FaBell, FaRegCalendarAlt, FaNewspaper, FaUser,FaUsers, FaRegSun} from 'react-icons/fa'

function DashBord() {
    const {currentUser, user, setUser} = useContext(FormContext)
    // console.log(currentUser)
    const userRef = doc(db, "users", currentUser?.uid);
    getDoc(userRef).then(user =>  setUser(user.data()))
    .catch(err => console.log(err))
   
  return (
    <div className='w-full h-screen bg-gray-100 overflow-scroll'>
        <DashMenu /> 
        <div className='w-full h-full grid grid-cols-5 grid-rows-6 gap-4 mt-4 px-20 bg-inherit overflow-scroll'>
            <div className='bg-white col-span-1 row-span-3 grid grid-cols-1 grid-rows-2'>
                <div className='bg-orange-600 col-span-1 row-span-1 grid grid-rows-5'>
                    <div className='relative bg-inherit row-span-2'>
                        <div className='absolute w-16 h-16 bg-gray-200 rounded-full bottom-0 right-1/3 translate-y-1/2'></div>
                    </div>
                    <div className='bg-white row-span-3 flex flex-col items-center justify-end pb-2'>
                        <h4 className='font-sans font-bold'>{user.name}</h4>
                        <p>Bio</p>
                    </div>  
                </div>
                <div className='bg-white col-span-1 row-span-1 grid grid-rows-5'>
                    <div className='bg-white row-span-2 flex flex-col items-center justify-center border-t-2 border-gray-100'>
                        <p>Following</p>
                        <p>105</p>
                    </div>
                    <div className='bg-white row-span-2 flex flex-col items-center justify-center border-t-2 border-gray-100'>
                        <p>Follower</p>
                        <p>100</p>
                    </div>
                    <div className='bg-white row-span-1 flex items-center justify-center border-t-2 border-gray-100'>
                        <p className='text-sm text-orange-600'>View Profile</p>
                    </div>
                </div>
            </div>                                                                                               
            <div className='bg-white col-span-3 row-span-1'>
                <hr className='h-2 bg-orange-600'/>
                <div className='h-20 bg-white flex items-center px-5 justify-between'>
                   <textarea id='post' name='post' rows='2' columns='70' placeholder='create a post' className='p-3 w-3/4 font-sans text-lg'></textarea>
                    <button className='p-2 bg-orange-600 text-white w-28 font-sans text-lg'>Post</button>
                </div>
                
            </div> 
            <div className='bg-white col-span-1 row-span-3 grid grid-rows-6'>
            <div className='bg-white row-span-1 flex items-center justify-center border-b border-gray-200'>
                    <p className='font-sans'>Who to follow</p>
                </div>
                <div className='bg-white row-span-1 flex items-center gap-2 px-2'>
                    <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
                    <div className='flex flex-col text-xs font-sans'>
                        <p className='font-bold'>Name Surname</p>
                        <p>Occupation</p>
                    </div>
                    <div className='w-6 h-6 border border-gray-300 flex items-center justify-center ml-auto'>
                        <FaPlus className='text-gray-200'/>
                    </div>
                </div>
                <div className='bg-white row-span-1'>
                    <div className='bg-white row-span-1 flex items-center gap-2 px-2'>
                        <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
                        <div className='flex flex-col text-xs font-sans'>
                            <p className='font-bold'>Name Surname</p>
                            <p>Occupation</p>
                        </div>
                        <div className='w-6 h-6 border border-gray-300 flex items-center justify-center ml-auto'>
                            <FaPlus className='text-gray-200'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white row-span-1'>
                    <div className='bg-white row-span-1 flex items-center gap-2 px-2'>
                        <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
                        <div className='flex flex-col text-xs font-sans'>
                            <p className='font-bold'>Name Surname</p>
                            <p>Occupation</p>
                        </div>
                        <div className='w-6 h-6 border border-gray-300 flex items-center justify-center ml-auto'>
                            <FaPlus className='text-gray-200'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white row-span-1'>
                    <div className='bg-white row-span-1 flex items-center gap-2 px-2'>
                        <div className='w-10 h-10 bg-gray-200 rounded-full'></div>
                        <div className='flex flex-col text-xs font-sans'>
                            <p className='font-bold'>Name Surname</p>
                            <p>Occupation</p>
                        </div>
                        <div className='w-6 h-6 border border-gray-300 flex items-center justify-center ml-auto'>
                            <FaPlus className='text-gray-200'/>
                        </div>
                    </div>
                </div>
                <div className='bg-white row-span-1 flex items-center justify-center'>
                    <p className='text-sm text-orange-600 font-sans'>View More</p>
                </div>
            </div> 
            <div className='bg-white col-span-3 row-span-3'></div>
            <div className='bg-white col-span-1 row-span-3 grid grid-rows-6'>
                <div className='bg-white row-span-1 flex gap-3 items-center px-3'>
                   <FaUser />
                   <p>Connections</p>
                </div>
                <div className='bg-white row-span-1 flex gap-3 items-center px-3'>
                    < FaNewspaper />
                   <p>Latest News</p>
                </div>
                <div className='bg-white row-span-1 flex gap-3 items-center px-3'>
                    <FaRegCalendarAlt  />
                   <p>Events</p>
                </div>
                <div className='bg-white row-span-1 flex gap-3 items-center px-3'>
                    <FaUsers/>
                   <p>Groups</p>
                </div>
                <div className='bg-white row-span-1 flex gap-3 items-center px-3'>
                    <FaBell />
                   <p>Notifications</p>
                </div>
                <div className='bg-white row-span-1 flex gap-3 items-center px-3'>
                    <FaRegSun />
                   <p>Settings</p>
                </div>
            </div> 
            <div className='bg-white col-span-1 row-span-3'>
                
            </div>
            
            <div className='bg-white col-span-3 row-span-2'></div>       
        </div>
        Welcome {user.name}
    </div>
  )
}

export default DashBord

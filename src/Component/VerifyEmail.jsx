import React from 'react';
import {useState, useEffect, useContext} from 'react';
import {sendEmailVerification} from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
import FormContext from '../Context/FormContext';

function VerifyEmail() {
    const [time, setTime] = useState(60);
    const {timeActive, setTimeActive, currentUser} = useContext(FormContext);
    const navigate = useNavigate();

    useEffect(()=>{
        let interval = null;
        if(timeActive && time !== 0){
            interval = setInterval(()=> {setTime(time - 1)}, 1000)
        }
        else if(time === 0){
            setTimeActive(false);
            setTime(60)
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    },[setTimeActive, timeActive, time]);

    useEffect(()=> {
        const interval = setInterval(()=>{
            currentUser?.reload().then(()=> {
                if(currentUser?.emailVerified){
                    clearInterval(interval)
                    navigate('/dashboard')
                }
            })
            .catch((err)=> {console.log('error')})
        }, 1000)
    }, [currentUser, navigate])

    const resendEmail = (e) => {
        sendEmailVerification(currentUser)
        .then(() => {
            setTimeActive(true);
        })
        .catch((err)=> {
            console.log('error');
        })
    }

    return (
        <div className='w-full h-screen bg-white flex items-center justify-center'>
            <div className='bg-gray-100	w-1/2 h-1/2 flex flex-col gap-5 justify-center items-center'>
                <h4 className='font-sans font-medium text-lg'>Verify Your Email Address</h4>
                <p className='font-normal font-sans text-base'>A verification mail has been sent to: </p>
                <span>{currentUser?.email}</span>
                <p className='font-normal font-sans text-base'>Follow the instruction in the mail to verify your account</p>
                <button onClick={resendEmail} disabled={timeActive} className='w-32 h-10 border-2 border-gray-100 bg-gray-200'>Resend Email {timeActive && time}</button>
            </div>
        </div>
    )
}

export default VerifyEmail
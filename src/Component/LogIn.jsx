import React from 'react'
import { useContext } from 'react'
import {Link} from 'react-router-dom'
import FormContext from '../Context/FormContext'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LogIn() {
    const {passwordhandler, confirmHandler, type, REGEX_PASSWORD} = useContext(FormContext)
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Enter a valid email')
                    .required('This field is required'),
            password: Yup.string().matches(REGEX_PASSWORD, 'Enter a strong password with atleast 8 characters')        
                        .required('This field is required'), 
        }),
        onSubmit: (values) => { 
            console.log(values)
        }
    })
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-white'>
        <div className='w-1/2 h-3/4 bg-gray-100'>
            <form onSubmit={formik.handleSubmit} className='w-full h-3/4 bg-inherit flex flex-col items-center justify-center'>
                <h1 className='text-2xl font-sans font-semibold mb-5'>Log in</h1>
                <div className='w-3/4 mb-3'>
                    <input type='email' name='email' placeholder='Email Address' className='w-full border border-gray-400 bg-white p-3' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.errors.email && formik.touched.email && <p className='text-red-500 text-sm px-5'>{formik.errors.email}</p>}
                </div>
                <div className='w-3/4 mb-3 relative'>
                    <input type={type} name='password' placeholder='Password' className='w-full border border-gray-400 bg-white p-3' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/> : <FaRegEye onClick={confirmHandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/>}
                    {formik.errors.password && formik.touched.password && <p className='text-red-500 text-sm px-5'>{formik.errors.password}</p>}
                </div>
                <div className='w-3/4 mb-3'>
                <Link to='/reset'>
                    <p type='button' className='text-start font-sans text-green-500 text-xl'>Reset Password</p>
                </Link>
                </div>
                <button type='submit' className='w-3/4 bg-green-500 text-white text-lg p-3 font-sans font-semibold' disabled={!formik.isValid}>Submit</button>
            </form>
        </div>
        <div className='mt-5'>
            <p className='font-sans text-lg'>You don't have an account <span className='text-green-500 font-sans text-lg'><Link to='/signup'>Sign up here</Link></span></p>
        </div>
    </div>
  )
}

export default LogIn

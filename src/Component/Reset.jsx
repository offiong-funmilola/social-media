import React from 'react'
import { useContext } from 'react'
import FormContext from '../Context/FormContext'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Reset() {
    const {passwordhandler, confirmHandler, type, REGEX_PASSWORD} = useContext(FormContext)
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().matches(REGEX_PASSWORD, 'Enter a strong password with atleast 8 characters')        
                        .required('This field is required'), 
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Must match password field value')
                        .required('This field is required')
        }),
        onSubmit: (values) => { 
            console.log(values)
        }
    })
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-white'>
            <div className='w-1/2 h-3/4 bg-gray-100'>
                <form onSubmit={formik.handleSubmit} className='w-full h-3/4 bg-inherit flex flex-col items-center justify-center'>
                    <h1 className='text-2xl font-sans font-semibold mb-5'>Reset your password</h1>
                    <div className='w-3/4 mb-3 relative'>
                        <input type={type} name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full border border-gray-400 bg-white p-3'/>
                        {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/> : <FaRegEye onClick={confirmHandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/>}
                        {formik.errors.password && formik.touched.password && <p className='text-red-500 text-sm px-5'>{formik.errors.password}</p>}
                    </div>
                    <div className='w-3/4 mb-3 relative'>
                        <input type={type} name='confirmPassword' placeholder='Confirm Password' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full border border-gray-400 bg-white p-3'/>
                        {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/> : <FaRegEye onClick={confirmHandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/>}
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && <p className='text-red-500 text-sm px-5'>{formik.errors.confirmPassword}</p>}
                    </div>
                    <div className='w-3/4 mb-3'>
                        <button type='submit' className='w-3/4 bg-green-500 text-white text-lg p-3 font-sans font-semibold' disabled={!formik.isValid}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
      )
}

export default Reset

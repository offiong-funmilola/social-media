import React from 'react'
import {useContext} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {FaFacebookF, FaTwitter, FaGoogle, FaRegEye, FaRegEyeSlash} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import FormContext from '../Context/FormContext'

function SignUp() {
    const {passwordhandler, confirmHandler, type, REGEX_PASSWORD} = useContext(FormContext)
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .min(3, 'Too Short!')
                    .max(20, 'Too Long!')
                    .required('This field is required'),
            email: Yup.string().email('Enter a valid email')
                    .required('This field is required'),
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
        <div className='w-full h-screen flex justify-between'>
            <div className='md:w-1/2 bg-red-400'>
            </div>
            <div className='w-full md:w-1/2'>
                <div className='w-full bg-white h-1/6 px-10 flex flex-col gap-2'>
                    <h2 className='font-sans text-xl text-center mt-2'>Create an Account</h2>
                    <p className='font-sans text-base text-center'>Sign up with your social media account</p>
                    <div className='w-full flex justify-between'>
                        <div className='w-44 p-2 bg-blue-900 text-white flex items-center justify-center gap-2 rounded-full'>
                            <FaFacebookF className='text-xl'/> 
                            <p className='text-base font-sans'>Facebook</p>
                        </div>
                        <div className='w-44 p-2 bg-blue-400 text-white flex items-center justify-center gap-2 rounded-full'>
                            <FaTwitter className='text-xl'/> 
                            <p className='text-base font-sans'>Twitter</p>
                        </div>
                        <div className='w-44 p-2 bg-orange-600 text-white flex items-center justify-center gap-2 rounded-full'>
                            <FaGoogle className='text-xl'/> 
                            <p className='text-base font-sans'>Google</p>
                        </div>
                    </div>
                </div>
                
                <div className='w-full  h-1/6 px-10 bg-white flex items-center justify-center'>
                    <hr className='w-1/2 border border-gray-400'/>
                    <div className='w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center font-bold'>or</div>
                    <hr className='w-1/2 border border-gray-400'/>
                </div>
                <form className='w-full h-3/6 px-10 bg-white' onSubmit={formik.handleSubmit}>
                    <div className='w-full mb-2'>
                        <label htmlFor='name' className='hidden'>name</label>
                        <input type='text' id='name' name='name' placeholder='Username' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full h-10 p-3 border border-gray-400 rounded-full text-lg font-sans text-black bg-white' />
                        {formik.errors.name && formik.touched.name && <p className='text-red-500 text-sm px-5'>{formik.errors.name}</p>}
                    </div>
                    <div className='w-full mb-2'>
                        <input type='email' id='email' name='email' placeholder='Email Address' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full h-10 p-3 border border-gray-400 rounded-full'/>
                        {formik.errors.email && formik.touched.email && <p className='text-red-500 text-sm px-5'>{formik.errors.email}</p>}
                    </div>
                    <div className='w-full relative mb-2'>
                        <input type={type} id='password' name='password' placeholder='Password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full h-10 p-3 border border-gray-400 rounded-full'/>
                        {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/> : <FaRegEye onClick={confirmHandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/>}
                        {formik.errors.password && formik.touched.password && <p className='text-red-500 text-sm px-5'>{formik.errors.password}</p>}
                    </div>
                    <div className='w-full relative mb-2'>
                        <input type={type} id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-full h-10 p-3 border border-gray-400 rounded-full'/>
                        {type === 'password' ? <FaRegEyeSlash onClick={passwordhandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/> : <FaRegEye onClick={confirmHandler} className='absolute top-0 translate-y-2/3 right-3 text-xl'/>}
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && <p className='text-red-500 text-sm px-5'>{formik.errors.confirmPassword}</p>}
                    </div>
                    <button type='submit' className='w-full p-3 bg-green-500 text-white rounded-full text-xl' disabled={!formik.isValid}>Sign Up</button>
                </form>
                <div className='w-full h-1/6 bg-gray-300'>
                    <hr className='w-full border-2 border-gray-400'/>
                    <p className='font-sans font-semibold text-xl text-center mt-6'>Already have an account? <span className='text-green-500 text-base font-sans'>
                        <Link to='/login'>Login here</Link></span></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp

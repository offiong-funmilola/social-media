import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import FormContext from '../Context/FormContext'

function Protected({children}) {
    const {currentUser} = useContext(FormContext)
    if(!currentUser){
        return <Navigate to='/' />
    }
    else {
        return children
    }
}

export default Protected

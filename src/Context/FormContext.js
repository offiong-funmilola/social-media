import { createContext, useState, useEffect } from "react";
import { onAuthStateChanged  } from "firebase/auth";
import {auth} from '../Component/Config/firebase'
const FormContext = createContext()

export const FormProvider = ({children}) => {
    const [type, setType] = useState('password')
    const passwordhandler = (e) => {
        setType('text')
    }
    const confirmHandler = (e)=>{
        setType('password')
    }
    const REGEX_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const [currentUser, setCurrentUser] = useState('')
    const [timeActive, setTimeActive] = useState(false)
    const [user, setUser] = useState({})

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged (auth, (user)=>{
            setCurrentUser(user)
        })
        return(()=> {
            unsubcribe()   
        })
    },[setCurrentUser])

    

    return (
        <FormContext.Provider value={{type, passwordhandler, confirmHandler,REGEX_PASSWORD, currentUser, setCurrentUser, timeActive, setTimeActive, user, setUser}}>
            {children}
        </FormContext.Provider>
    )

}
export default FormContext
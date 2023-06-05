import { createContext, useState } from "react";
 
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

    return (
        <FormContext.Provider value={{type, passwordhandler, confirmHandler,REGEX_PASSWORD}}>
            {children}
        </FormContext.Provider>
    )

}
export default FormContext
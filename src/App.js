import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';
import Reset from './Component/Reset';
import {FormProvider} from './Context/FormContext'

function App() {
  return (
    <>
      <FormProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/reset' element={<Reset/>}/>
          </Routes>
        </Router>
      </FormProvider>
    </>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';
import Reset from './Component/Reset';
import {FormProvider} from './Context/FormContext'
import VerifyEmail from './Component/VerifyEmail';
import DashBord from './Component/DashBord';
import Protected from './Component/Protected';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <FormProvider>
        <Router>
          <ToastContainer theme='colored'></ToastContainer>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/login' element={<LogIn/>}/>
            <Route path='/reset' element={<Reset/>}/>
            <Route path='/verify' element={<VerifyEmail/>}/>
            <Route path='/dashboard' element={
              <Protected>
                <DashBord/>
              </Protected>
              }
            />
          </Routes>
        </Router>
      </FormProvider>
    </>
  );
}

export default App;

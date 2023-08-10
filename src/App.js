import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<SignUp/>}/>
    <Route path={'/passwordreset'} element={<ForgetPassword/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

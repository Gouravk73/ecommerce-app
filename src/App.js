import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/authentication/Login';
import SignUp from './components/authentication/SignUp';
import ForgetPassword from './components/authentication/ForgetPassword';
import Home from './components/home/Home';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<SignUp/>}/>
    <Route path={'/passwordreset'} element={<ForgetPassword/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

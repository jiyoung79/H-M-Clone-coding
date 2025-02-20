import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

function App() {
   const [authenticate, setAuthenticate] = useState(() => {

      return JSON.parse(localStorage.getItem('authenticate')) || false;
   });

   useEffect(() => {
      
      localStorage.setItem('authenticate', JSON.stringify(authenticate));
   }, [authenticate]);

   return (
      <div>
         <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
         <Routes>
            <Route path='/' element={<ProductAll />} />
            <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
            <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
         </Routes>
      </div>
   );
}

export default App;

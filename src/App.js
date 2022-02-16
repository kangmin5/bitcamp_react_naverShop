
import React from 'react';
import Home from './hello/Home'
import Login from './hello/Login'
import Bmi from "./hello/Bmi"
import Calc from './hello/Calc'
import Grade from './hello/Grade'
import { BrowserRouter as Router , Routes,Route,Link } from 'react-router-dom';

const App=()=> {



  return (
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/bmi' element={<Bmi/>}/>
      <Route path='/calc' element={<Calc/>}/>
      <Route path='/grade' element={<Grade/>}/>
    </Routes>
  );
}

export default App;

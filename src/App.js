import React from 'react'
import {useRoutes} from 'react-router-dom';
import Home from './pages/Home'
import {Bmi,Calc,Grade,Login,Lotto,Home,Menu1} from './components/Index'
import Menu1 from './components/Menu1';

export default function App(){
  return useRoutes([
    {path: "/", element: <Home />},
    {path: "/bmi", element: <Bmi />},
    {path: "/calc", element: <Calc />},
    {path: "/grade", element: <Grade />},
    {path: "/login", element: <Login />},
    {path: "/lotto", element: <Lotto />},
    {path: "/menu1", element: <Menu1 />},
  ])
}
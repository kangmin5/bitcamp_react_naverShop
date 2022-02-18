import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar(){
  return <div>
    <nav>
      <Ul>
        <Li><Link to={"/"}>Home</Link></Li>
        <Li><Link to="/bmi">Bmi</Link></Li>
        <Li><Link to="/calc">Calc</Link></Li>
        <Li><Link to="/grade">Grade</Link></Li>
        <Li><Link to="/login">Login</Link></Li>
        <Li><Link to="/counter">Counter</Link></Li>
      </Ul>
    </nav>
</div>
}

const Ul = styled.ul`
text-decoration: none;
text-align: center;

`
const Li = styled.li`
float: 0;
list-style-type: none;
display: inline-block;
margin-left: 1em;
font-size: 1.2em;

`


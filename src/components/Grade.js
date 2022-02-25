import React, { useState } from 'react'
import Layout from '../containers/Layout'
import Exam from './Exam'

export default function Grade(){
  const [inputs,setInputs]=useState({})
  const {name,kor,eng,math} = inputs

  const handleChange=(e)=>{
    const {name,value}=e.target
    setInputs({...inputs,[name]:value})
  }

   
  const handleClick=(e)=>{
    e.preventDefault()
    const renderRequest = {name,kor,eng,math}
    alert(`Grade : ${JSON.stringify(renderRequest)}`)
  }
    return (<Layout>
      <h1>성적(국,영,수)</h1>
        <form>
          <input placeholder='이름' name='name' onChange={handleChange}/><br/>
          <input placeholder='국어' name='kor'  onChange={handleChange} /><br/>
          <input placeholder='영어' name='eng' onChange={handleChange}/><br/>
          <input placeholder='수학' name='math' onChange={handleChange} /><br/>
          <button onClick={handleClick}>확인</button>
        </form>
    </Layout>)
}



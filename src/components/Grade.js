import React, { useState } from 'react'
import Layout from '../containers/Layout'
import { memberGrade } from '../api'
export default function Grade(){
  const [inputs,setInputs]=useState({})
  const [result,setResult]=useState('')
  const {name,kor,eng,math} = inputs

  const handleChange=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setInputs({...inputs,[name]:value})
  }

  const handleClick=(e)=>{
    e.preventDefault()
    memberGrade({name,kor,eng,math}).then(res =>setResult(res.data)).catch(err => console.log(`에러발생: ${JSON.stringify(err)}`))
    
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
        <div>
          <p>성적 결과 : {result}</p>
        </div>
    </Layout>)
}



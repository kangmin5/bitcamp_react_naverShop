import React, { useState } from 'react'
import Layout from '../containers/Layout'

export default function Calc(){

  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [opcode,setOpcode] = useState("")
  const [result,setResult]= useState(0)
  const sum=()=>{
    return setResult(Number(num1)+Number(num2))
  }
  
  return (
    <Layout>
      <h1>계산기</h1>
      <div>
          <label htmlFor="">숫자1</label>
          <input id="num1" name='' />

          <label htmlFor="">연산</label>
          <select name="" id="">
            <option value="">+</option>
            <option value="">-</option>
            <option value="">*</option>
            <option value="">/</option>
            <option value="">%</option>
          </select>
          <br/>
          <label htmlFor='' >숫자2</label>
          <input id="num2" name=""/><br/>

          <button onClick={()=>{setNum1(document.getElementById('num1').value)}}>숫자1결정</button>
          <button onClick={()=>{setNum2(document.getElementById('num2').value)}}>숫자2결정</button>
          <button onClick={()=>{sum()}}>더하기 실행</button>
          <div>결과: {num1}+ {num2}={result}</div>
      </div>
    </Layout>
  )
}



import React, { useState } from 'react'
import Layout from '../containers/Layout'

export default function Calc(){

  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [opcode,setOpcode] = useState(0)
  const [result,setResult]= useState(0)
  
  const calcu=()=>{
    return(
     <p>{num1} + {num2} = {Number(num1)+Number(num2)}</p>  
    )

  }
  
  return (
    <Layout>
      <h1>계산기</h1>
      <div>

        <form onSubmit={calcu}>      
          <input placeholder='숫자' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
          <select value={opcode} onChange={(e)=>setOpcode(e.target.value)}>
            <option value={0}>+</option>
            <option value={1}>-</option>
            <option value={2}>*</option>
            <option value={3}>/</option>
            <option value={4}>%</option>
          </select>
          <br/>
          <input placeholder='숫자' value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>
          <button type="submit">더하기 실행</button>
        </form>

          <div>결과: {num1}+ {num2}={result}</div>
      </div>
    </Layout>
  )
}



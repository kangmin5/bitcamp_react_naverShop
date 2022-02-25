import React, { useState } from 'react'
import Layout from '../containers/Layout'


export default function Calc(){
  const selectList=["+","-","*","/","%"]
  const [selected,setSelected] = useState('')
  const [inputs,setInputs] = useState({})
  const {num1,num2,opcode} = inputs
  
  const handleChange=(e)=>{
    const {name,value} = e.target
    setInputs({...inputs,[name]:value})
  }
  const handleClick =(e)=>{
    e.preventDefault()
    const calcuRequest ={num1,selected,num2}
    alert(` 계산하기 : ${JSON.stringify(calcuRequest)}`)
  }
  
  return (
    <Layout>
      <h1>계산기</h1>
          <form>
            <input placeholder='숫자' name='num1' onChange={handleChange}/>
            <select name='opcode' onChange={(e)=>setSelected(e.target.value)}>
              {selectList.map((item)=>(
                <option value={item} key={item}>{item}</option>
              ))}
            </select><br/>
            <input placeholder='숫자' name='num2' onChange={handleChange}/><br/>
            <button onClick={handleClick}>계산</button>
          </form>
    </Layout>
  )
}



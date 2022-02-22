import React, { useState } from 'react'
import Layout from '../containers/Layout'

export default function Calc(){
  const selectList=["+","-","*","/","%"]
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)
  const [selected,setSelected] = useState('')
  const [result,setResult]= useState(0.0)
  
  const calcu=(e)=>{
    e.preventDefault()
      setResult(Number(num1) + Number(num2)) 
      if(selected === selectList[0]){
        setResult(Number(num1) + Number(num2)) }
      if(selected ===selectList[1]){
        setResult(Number(num1) - Number(num2))}
      else if(selected ===selectList[2]){
        setResult(Number(num1) * Number(num2))}
      else if(selected ===selectList[3]){
        setResult(Number(num1) / Number(num2))}
      else if(selected ===selectList[4]){
        setResult(Number(num1) % Number(num2))}
  }
  
  return (
    <Layout>
      <div className='calcall'>
      <h1>계산기</h1>
        <div>
          
            <input placeholder='숫자' value={num1} onChange={(e)=>setNum1(e.target.value)}/>
            <select value={selected} onChange={(e)=>setSelected(e.target.value)}>
              {selectList.map((item)=>(
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
            <br/>
            <input placeholder='숫자' value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>
            <div>
            <button onClick={calcu}>계산하기</button>
            </div>


            <div><h3>결과: {num1}{selected.value}   {num2}={result}</h3></div>
        </div>
      </div>
    </Layout>
  )
}



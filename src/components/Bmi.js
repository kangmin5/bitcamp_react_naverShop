import React, { useState } from 'react'
import Layout from '../containers/Layout'


export default function Bmi() {
  const [username,setUsername] =useState("")
  const [height,setHeight] =useState(0.0)
  const [weight,setWeight] = useState(0.0)
  const [bmi,setBmi] = useState(0.0)
  
  const result=()=>{
    let username = document.getElementById('username').value
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    setUsername(username)
    setHeight(height)
    setWeight(weight)
    setBmi((Number(weight)/ Number(height)/ Number(height))*10000)

  }

  return (
    <Layout >
      <div className='container'>
        <h1 className='head'>BMI 측정</h1>
        <div>
            <label ><b>Username</b></label>
            <input id='username'/><br/>
            <label ><b>Height</b></label>
            <input id='height'/><br/>
            <label ><b>Weight</b></label>
            <input id='weight'/><br/>
            <button onClick={result}>확인</button>
          <div>
            <h2>{username}님의BMI는: {bmi}</h2>
          </div>
        </div> 
      </div>
    </Layout>
  )
}

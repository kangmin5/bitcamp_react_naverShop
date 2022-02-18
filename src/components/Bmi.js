import React, { useState } from 'react'
import Layout from '../containers/Layout'


export default function Bmi() {
  const [username,setUsername] =useState("")
  const [height,setHeight] =useState(0.0)
  const [weight,setWeight] = useState(0.0)

  return (
    <Layout >
      <div className='container'>
        <h1 className='head'>BMI 측정</h1>
        <div>
          <form action="">
            <label ><b>Username</b></label>
            <input type="" /><br/>
            <label ><b>Height</b></label>
            <input type=""/><br/>
            <label ><b>Weight</b></label>
            <input type=""/><br/>
            <button>확인</button>
          </form>
        </div> 
      </div>
    </Layout>
  )
}

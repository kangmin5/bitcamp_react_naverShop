import React from 'react'
import Layout from '../containers/Layout'


export default function Bmi() {
  return (
    <Layout >
      <div className='container'>
        <h1 className='head'>BMI 측정</h1>
        <div>
          <form action="">
            <label htmlFor="">키(cm)</label>
            <input  /><br/>
            <label htmlFor="">몸무게(kg)</label>
            <input  /><br/>
            <button>확인</button>
          </form>
        </div> 
      </div>
    </Layout>
  )
}

import React from 'react'
import Layout from '../containers/Layout'

export default function Calc(){
  return (
    <Layout>
      <h1>계산기</h1>
      <div>
        <form action="">
          <label htmlFor="">숫자1</label>
          <input  />
          <label htmlFor="">연산</label>
          <input  />
          <label htmlFor="">숫자2</label>
          <input  /><br/>
          <button>확인</button>
        </form>
      </div>
    </Layout>
  )
}



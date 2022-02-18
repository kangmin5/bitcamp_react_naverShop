import React, { useState } from 'react'
import Layout from '../containers/Layout'

export default function Grade(){
  const [name,setName]=useState("")
  const [kor,setKor] = useState(0)
  const [eng,setEng] = useState(0)
  const [math,setMath] = useState(0)
  const [sum,setSum] = useState(0)
  const [avg,setAvg] = useState(0.0)
  const result =()=>{
    let name = document.getElementById('name').value
    setName(name)
    let kor = document.getElementById('kor').value
    setKor(kor)
    let eng = document.getElementById('eng').value
    setEng(eng)
    let math = document.getElementById('math').value
    setMath(math)
    let sum = (Number(kor)+Number(eng)+Number(math))
    setSum(sum)
    setAvg(Number(sum)/3)
    
  }

  return (
    <Layout>
      <h1>성적(국,영,수)</h1>
      <div>
          <label htmlFor="">이름 : </label>
          <input id='name' /><br/>
          <label htmlFor="">국어 : </label>
          <input id='kor' /><br/>
          <label htmlFor="">영어 : </label>
          <input id='eng' /><br/>
          <label htmlFor="">수학 : </label>
          <input id='math' /><br/>

          <button onClick={result} >확인</button>

          <div>
            <h3>{name}학생의 국어 {kor} 영어 {eng} 수학{math} 점수이고 합계는 {sum}이고 평균은{avg}입니다.</h3>
          </div>

      </div>

    </Layout>
  )
}



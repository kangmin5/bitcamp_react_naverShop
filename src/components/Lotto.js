import React, { useState } from 'react'
import { memberLotto } from '../api'
import Layout from '../containers/Layout'

export default function Lotto() {

  const [lotto,setLotto] = useState([])
  const [result,setResult] = useState('')
  const makeLotto=()=>{
    let arr =[]
    let num =0;
    for(let i=0;i<6;i++){
      num=(Math.floor(Math.random()*45+1))
      arr.push(num)
    }
    setLotto(arr)
  }
  const handleClick=(e)=>{
    e.preventDefault()
    makeLotto()
    }
  
  const serverClick=(e)=>{
    e.preventDefault()
    alert(`보내는데이타${JSON.stringify(lotto)}`)
    memberLotto({lotto}).then(res =>setResult(res.data)).catch(err => console.log(`에러발생: ${JSON.stringify(err)}`))
  }
  return (<Layout>

    <h1>Lotto</h1>
      <button onClick={handleClick}>숫자6개불러오기</button>
      <div>
       <b> {lotto.toLocaleString()} </b>
      </div><br/>
      <button onClick={serverClick}>서버에서 정렬 후 가져오기</button>
      <div>
       <p> {result}</p>
      </div>
   </Layout>)
}

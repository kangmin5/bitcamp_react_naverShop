import React, { useState } from 'react'
import Layout from '../containers/Layout'
import Exam from './Exam'

export default function Grade(){
const [grades,setGrades] = useState([])
const [name,setName] = useState("")
const [kor,setKor] = useState(0)
const [eng,setEng] = useState(0)
const [math,setMath] = useState(0)

const renderGrades = grades.map((grade)=>{
  return(
    <Exam grade={grade} key={grade.name}/>
    )
})
   
const addExam=(e)=>{
  e.preventDefault()
  setGrades([
    {name:name,kor:kor,eng:eng,math:math },...grades
  ])
  setName('')
  setKor('')
  setEng('')
  setMath('')
}
    return (
      <Layout>
      <div className='gradeall '>
      <div className='gradeleft '>
      <h1>성적(국,영,수)</h1>
        <form onSubmit={addExam} >
          <input placeholder='이름' type='text' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
          <input placeholder='국어' type='text' value={kor} onChange={(e)=>setKor(e.target.value)} /><br/>
          <input placeholder='영어' type='text' value={eng} onChange={(e)=>setEng(e.target.value)}/><br/>
          <input placeholder='수학' type='text' value={math} onChange={(e)=>setMath(e.target.value)} /><br/>

          <button type="submit">확인</button>
        </form>
      </div>
      <div className='graderight '>
        <h5>{renderGrades}</h5>
      </div>

    </div>

    </Layout>
  )
}



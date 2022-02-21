import React from 'react'

export default function Exam({grade}) {
    const sum=Number(grade.kor)+Number(grade.eng)+Number(grade.math)
    const avg=Math.floor((Number(sum)/3)*100)/100
  return (
    <div>
    <div className='grade'>
    <div className='grade-data'>
      <span>학생이름 : {grade.name}</span>
      <span>국어 : {grade.kor}</span>
      <span>영어 : {grade.eng}</span>
      <span>수학 : {grade.math}</span>
    </div>
    <div className='grade-sum'>
      합계는: {sum} 이고 평균은 {avg} 입니다.
    </div>
  </div>
    </div>
  )
}

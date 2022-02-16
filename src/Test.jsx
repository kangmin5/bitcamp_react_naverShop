import React, { useState } from 'react'

const Test = () => {
  const [text,setText]=useState("")
  const [edit,setEdit]=useState(false)

  let content =
    <div>
      {text}<button onClick={()=> setEdit(true)}>수정 </button>
    </div>

  if(edit){
    content =
    <div>
      <input type="text" value={text} onChange={(e)=>{
        setText(e.target.value);
        }}
      />
      <button onClick={()=>setEdit(false)}>수정</button>
    </div>

  }
    

  return (
    <div>
      {content}
    </div>
  )
}

export default Test

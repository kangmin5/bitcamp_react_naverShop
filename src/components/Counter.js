import React, { useState } from 'react'
import Layout from '../containers/Layout'

export default function Counter(){
    const [count,setCount]=useState(0)
  return (
    <Layout>

        <button onClick={()=>{setCount(count+1)}}>+</button>  
        <button onClick={()=>{setCount(count-1)}}>-</button>  
        <div>
            <h2>{count}</h2>
        </div>
    </Layout>
  )
}





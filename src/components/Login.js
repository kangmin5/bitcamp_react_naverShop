import { useState } from 'react'
import '../App.css'
import Layout from "../containers/Layout"
import { memberLogin } from '../api'

export default function Login(){

  const [inputs,setInputs] = useState({})
  const [result,setResult]=useState('')
  const {name,password} = inputs

  const handleChange = (e)=>{
    e.preventDefault()
    const {name,value} = e.target
    setInputs({...inputs,[name]:value})
  }
  const handleClick =(e)=>{
    e.preventDefault()
    memberLogin({name,password}).then(res=>setResult(res.data)).catch(err =>console.log(`에러발생: ${JSON.stringify(err)}`))

  }


  return (<Layout>
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="name" name='name' onChange={handleChange} /><br/>
        <input placeholder='Password' type='password' name="password" onChange={handleChange}/><br/>
        <button onClick={handleClick}>Login</button>
      </form>
      <div>
        <p>LOGIN결과는 : {result}</p>
      </div>
    </div>
    </Layout>
  )
}



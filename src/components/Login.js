import { useState } from 'react'
import '../App.css'
import Layout from "../containers/Layout"


export default function Login(){

  const [inputs,setInputs] = useState({})
  const {username,password} = inputs

  const handleChange = (e)=>{
    const {name,value} = e.target
    setInputs({...inputs,[name]:value})
  }
  const handleClick =(e)=>{
    e.preventDefault()
    const loginRequest ={username,password}
    alert(`Login : ${JSON.stringify(loginRequest)}`)
  }


  return (<Layout>
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Username" name='username' onChange={handleChange} /><br/>
        <input placeholder='Password' type='password' name="password" onChange={handleChange}/><br/>
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
    </Layout>
  )
}



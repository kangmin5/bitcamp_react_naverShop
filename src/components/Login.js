import { useState } from 'react'
import '../App.css'
import Layout from "../containers/Layout"
import User from './User'

export default function Login(){

  const [username,setUsername]=useState('')
  const [password,setPassword]= useState('')
  const [users,setUsers]=useState([])

  const renderUsers = users.map((user)=>{
    return (
      <User user={user} key={user.username} />
    )
  })

  const addUser=(e)=>{
    e.preventDefault()
    setUsers([
      {username:username,password:password},...users
    ])
    setUsername('')
    setPassword('')
  }


  return (<Layout>
    <div className='loginall'>
      <h1>Login</h1>

      <form className='login-form' onSubmit={addUser}>
        <input placeholder="Username" type='text' value={username} onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input placeholder='Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
      {renderUsers}
    </div>
    </Layout>
  )
}



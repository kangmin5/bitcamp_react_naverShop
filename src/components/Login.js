import { useState } from "react"
import Layout from "../containers/Layout"

export default function Login(){
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const result=()=>{
    let name = document.getElementById('name').value
    setName(name)
    let pass = document.getElementById('pass').value
    setPass(pass)
  }

  return (<Layout>
      <h1>Login</h1>
        
        <div>
          <label><b>Username  </b></label>
            <input id="name"/><br/>
          <label><b>Password  </b></label>
            <input type="password" id='pass' /><br/>
            <button onClick={result}>login</button>
          <div>
            <h3>이름은 {name}이고 암호는{pass}입니다.</h3>
          </div>
        </div>


    </Layout>
  )
}



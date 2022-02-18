import Layout from "../containers/Layout"
export default function Login(){

  return (
    <Layout className="login">
      <h1>Login</h1>
      <form >
        <div> 
          <img src="" alt=""/>
        </div>
        <div>
          <label htmlFor="name"><b>Username  </b></label>
            <input placeholder='이름' type='text'  /><br/>
          <label htmlFor="pw"><b>Password  </b></label>
            <input placeholder='암호' type ='password'  /><br/>
            <button type="submit" >login</button>
          <label>
            <input type ="checkbox"  name="" />Remember Me
          </label>
        </div>
      </form>

      <div className="container">
        <button type="button" className="cancelbtn">Cancel</button>
        <span className="psw">Forgot password?</span>
      </div>

    </Layout>
  )
}



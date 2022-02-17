import Layout from "../containers/Layout"

export default function Login(){

  return (
    <Layout>
      <h1>Login</h1>
      <form >
        <div> 
          <img src="" alt=""/>
        </div>
        <div>
          <label htmlFor="name"><b>Username  </b></label>
            <input placeholder='이름' type='text'  required/><br/>
          <label htmlFor="pw"><b>Password  </b></label>
            <input placeholder='암호' type ='password'  required/><br/>
            <button type="submit" >login</button>
          <label>
            <input type ="checkbox" checked="checked" name="remember" />Remember Me
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



import React from 'react'

const Login = () => {
  return (
    <div>
      <form >
        <div> 
          <img src="" alt=""/>
        </div>
        <div>
          <label for="uname"><b>Username  </b></label>
          <input placeholder='이름' type='text' name="uname" required/><br/>
          <label htmlFor=""><b>Password  </b></label>
          <input placeholder='암호' type ='password' name='psw' required/><br/>
          <button type="submit">login</button>
          <label>
            <input type ="checkbox" checked="checked" name="remember"/>Remember Me
          </label>
        </div>
      </form>

      <div class="container">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
        </div>


    </div>
  )
}

export default Login

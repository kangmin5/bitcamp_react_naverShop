/* import axios  from 'axios';
import { useLinkClickHandler } from 'react-router-dom'; */

import React, {useState} from 'react' 
import Layout from '../containers/Layout';

export default function Bmi(){
    const [inputs, setInputs] = useState({})
    const { name, weight, height } = inputs; // Object  Destructuring

    const handleChange = (e) => {

        const {name,value } = e.target;
        setInputs({ ...inputs, [name]: value})
        
    }
    const handleClick = (e) => {
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        alert(` 사용자이름: ${JSON.stringify(bmiRequest)}`)
        /*
        axios.get(`http://localhost:8080/member/bmi/김길동/180.5/80.5`)
            .then((res)=>{
                alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
            })*/
    }


    return (<Layout>
      <form>
        <h1>Bmi폼</h1> 
        <div>
          <input placeholder='username' name="name" onChange={handleChange}/><br />
          <input placeholder='height' name="height" onChange={handleChange} /><br />
          <input placeholder='weight' name="weight" onChange={handleChange} /><br />
          <button onClick={handleClick}>BMI 체크</button>
        </div> 
      </form>
    </Layout>)
}
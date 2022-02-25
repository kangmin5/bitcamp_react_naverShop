import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import { memberBmi } from '../api';


export default function Bmi(){
    const [inputs, setInputs] = useState({})
    const [result,setResult] = useState('')
    const { name, weight, height } = inputs; // Object  Destructuring

    const handleChange = (e) => {
        e.preventDefault()
        const {name,value } = e.target;
        setInputs({ ...inputs, [name]: value})
        
    }
    const handleClick = (e) => {
        e.preventDefault()
        memberBmi({name,weight,height}).then(res => setResult(res.data)).catch( err => console.log(`에러발생 : ${err}`))
       
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
        <div>
          <p> BMI 계산결과 : {result} </p>
        </div>
      </form>
    </Layout>)
}
import React, { useState } from 'react'
import axios from "axios"
import './Form.css'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'



function Form() {
  const [question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [option4, setOption4] = useState("")
  const [answer, setAnswer] = useState("")
  // const navigate = useNavigate()

  // https://quiz-back-6m9f.onrender.com/data/add

  const handleSubmit = async () => {
    // console.log(question)
    let result = await axios.post("http://localhost:9080/data/add", { question, option1, option2, option3, option4, answer })
    result = result.data
    console.log(result)
    if (result) {
      alert("Data has been added")
      // navigate("/allQuestion")
      
    }
  }


  return (
    <>
      <div>

        
      </div>
      <div className='header'>
        <label htmlFor='question'>Question:</label><br/>
        <input type="text" id='question' name='question' value={question} onChange={(e) => { setQuestion(e.target.value) }}></input><br />

        <label htmlFor='option1'>option 1:</label><br/>
        <input type='text' id='option1' name='option1' value={option1} onChange={(e) => { setOption1(e.target.value) }}></input><br />

        <label htmlFor='option2'>option 2:</label><br/>
        <input type='text' id='option2' name='option2' value={option2} onChange={(e) => { setOption2(e.target.value) }}></input><br />

        <label htmlFor='option3'>option 3:</label><br/>
        <input type='text' id='option3' name='option3' value={option3} onChange={(e) => { setOption3(e.target.value) }}></input><br />

        <label htmlFor='option4'>option 4:</label><br/>
        <input type='text' id='option4' name='option4' value={option4} onChange={(e) => { setOption4(e.target.value) }}></input><br />

        <label htmlFor='answer'>Answer</label><br/>
        <input type='text' id='answer' value={answer} onChange={(e) => { setAnswer(e.target.value) }}></input><br/>

        <button type='submit' onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>Submit</button>

        
      </div>
    </>
  )
}

export default Form
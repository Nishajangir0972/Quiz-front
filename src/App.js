import React, { useEffect, useState } from 'react'
import axios from "axios"

function App() {
  const [question, setQuestion] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then((result) => {
        setQuestion(result.form)
        console.log(result)
      })
      
  }, [])
  console.log(question)


  return (
    <div>

      {
        question.map((index, value) => (
          <div key={value}>
            <p>{index.form}</p>
          </div>
        )

        )
      }


    </div>
  )
}

export default App

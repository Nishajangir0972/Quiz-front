import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AllQuestion() {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(15);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:9080/data/ques")
      .then((result) => {
        setQuestions(result.data);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter >= 1) {
        setCounter((prevCounter) => prevCounter - 1);
      }
      if (counter === 0) {
        if(currentQuestion < questions.length - 1){
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          setCounter(15);
        }
       
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter , currentQuestion , questions]);

  return (
    <div>
      <p>Counter: {counter}</p>
      {currentQuestion < questions.length && (
        <div key={currentQuestion}>
          <p>{questions[currentQuestion].question}</p>
          <button>{questions[currentQuestion].option1}</button><br/>
          <button>{questions[currentQuestion].option2}</button><br/>
          <button>{questions[currentQuestion].option3}</button><br/>
          <button>{questions[currentQuestion].option4}</button><br/>
        </div>
      )}
    </div>
  );
}

export default AllQuestion;

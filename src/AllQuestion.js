import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './AllQuestions.css'

function AllQuestion() {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(15);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [Answer, setAnswer] = useState(null)
  const [score, setScore] = useState(0)

  // https://quiz-back-6m9f.onrender.com/data/ques

  useEffect(() => {
    axios.get("http://localhost:9080/data/ques")
      .then((result) => {
        // console.log(result.data)
        setQuestions(result.data);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter >= 1) {
        setCounter((Counter) => Counter - 1);
      }
      if (counter === 0) {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          setCounter(15);
          setAnswer(null)
        }

      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counter, currentQuestion, questions]);




  const checkAnswer = (selectedAnswer) => {
    // console.log(selectedAnswer)
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((score) => score + 1)
      setAnswer(true)



      // console.log("Correct Answer")

    }
    else {
      setAnswer(false)
      // console.log("Wrong Answer")
    }
  }



  return (
    <div className='section'>
      <h2>Total score : {score}</h2>
      <h3>Counter: {counter}</h3>
      {currentQuestion < questions.length && (
        <div key={currentQuestion}>
          <h1>{questions[currentQuestion].question}</h1>
          <button onClick={() => checkAnswer(questions[currentQuestion].option1)} disabled={Answer !== null}> {questions[currentQuestion].option1}</button><br />
          <button onClick={() => checkAnswer(questions[currentQuestion].option2)} disabled={Answer !== null}> {questions[currentQuestion].option2}</button><br />
          <button onClick={() => checkAnswer(questions[currentQuestion].option3)} disabled={Answer !== null}> {questions[currentQuestion].option3}</button><br />
          <button onClick={() => checkAnswer(questions[currentQuestion].option4)} disabled={Answer !== null}> {questions[currentQuestion].option4}</button><br />

        </div>

      )}


      {Answer === true && <p>Correct Answer !</p>}
      {Answer === false && <p>Wrong Answer !</p>}
    </div>
  );
}

export default AllQuestion;

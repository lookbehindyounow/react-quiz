import {useEffect, useState} from 'react'
import QuizInfo from "./components/QuizInfo"
import QuestionContainer from "./containers/QuestionContainer"
import Finish from "./components/Finish"

function App() {
  const [questions,setQuestions]=useState([])
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [score,setScore]=useState(0)
  
  useEffect(()=>{
    initialiseQuiz()
  },[]) // <--because of the [], this runs only on the first render, calling the asynchronous function below

  async function initialiseQuiz(){
    const response=await fetch("https://opentdb.com/api.php?amount=10&type=multiple") // api request
    const responseObject=await response.json() // convert json response to js object
    responseObject.results.forEach(apiQuestion=>{ // for each question create options array
      apiQuestion.options=[...apiQuestion.incorrect_answers,apiQuestion.correct_answer]
    })
    const formattedQuestions=[]
    for (const apiQuestion of responseObject.results){ // for each question
      for (let i=0;i<apiQuestion.options.length;i++){
        const option=apiQuestion.options.pop()
        apiQuestion.options.splice(Math.floor(Math.random()*(i+1)),0,option)
        // pop last option & insert back in somewhere between 0 & i, for each option
      }
      // format question & add to array
      formattedQuestions.push({question:apiQuestion.question,options:apiQuestion.options,answer:apiQuestion.correct_answer})
    }
    setQuestions(formattedQuestions) // set questions useState to formatted array
  }

  return(
    <section className="quiz_container">
      <h1 className='title'>the quiz</h1>
      <br/>
      {questions.length ? // if questions have loaded from api
        currentQuestion<questions.length ? // while running through questions
          <>
            <QuizInfo score={score} currentQuestion={currentQuestion}/>
            <br/>
            <QuestionContainer question={questions[currentQuestion]} score={score}
            setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
          </>
        : <Finish score={score} total={questions.length}/> // after all questions have been answered
      : <p>loading...</p> // before questions have loaded
      }
    </section>
  )
}

export default App

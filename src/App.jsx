import {useState} from 'react'
import QuizInfo from "./components/QuizInfo"
import QuestionContainer from "./containers/QuestionContainer"
import Finish from "./components/Finish"

const questions=[
  {question: "What was the name of the first computer virus that spread in the wild?",
  options: ["Brain", "Creeper", "ILOVEYOU", "Melissa"]},

  {question: "Which programming language is often referred to as the 'mother of all languages'?",
  options: ["C", "Java", "Fortran", "Assembly"]},

  {question: "In what year was the company Google founded?",
  options: ["1998","1996", "2000", "2004"]}
];

function App() {
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [score,setScore]=useState(0)

  return(
    <section className="quiz_container">
      <h1 className='title'>the quiz</h1>
      <br/>
      {currentQuestion<questions.length ?
        <>
          <QuizInfo score={score} currentQuestion={currentQuestion}/>
          <br/>
          <QuestionContainer question={questions[currentQuestion]} score={score}
          setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
        </>
      : <Finish score={score} total={questions.length}/>}
    </section>
  )
}

export default App

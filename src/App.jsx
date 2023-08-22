import {useState} from 'react'
import QuizInfo from "./components/QuizInfo"
import QuestionContainer from "./containers/QuestionContainer"

const questions=[
  {question: "What was the name of the first computer virus that spread in the wild?",
  options: ["Brain", "Creeper", "ILOVEYOU", "Melissa"]},

  {question: "Which programming language is often referred to as the 'mother of all languages'?",
  options: ["C", "Java", "Fortran", "Assembly"]},

  {question: "What was the name of the first computer virus that spread in the wild?",
  options: ["1998","1996", "2000", "2004"]}
];

function App() {
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [score,setScore]=useState(0)

  return(
    <section className="quiz_container">
      <h1 className='title'>the quiz</h1>
      <QuizInfo score={score} currentQuestion={currentQuestion}/>
      <br/>
      <QuestionContainer question={questions[currentQuestion]} score={score}
      setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
    </section>
  )
}

export default App

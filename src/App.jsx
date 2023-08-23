import {useState} from 'react'
import QuizInfo from "./components/QuizInfo"
import QuestionContainer from "./containers/QuestionContainer"
import Finish from "./components/Finish"

const questions=[
  {question: "What was the name of the first computer virus that spread in the wild?",
  options: ["Brain", "Creeper", "ILOVEYOU", "Melissa"],
  answer: "Brain"},

  {question: "Which programming language is often referred to as the 'mother of all languages'?",
  options: ["C", "Java", "Fortran", "Assembly"],
  answer: "C"},

  {question: "In what year was the company Google founded?",
  options: ["1998","1996", "2000", "2004"],
  answer: "1998"}
];

for (const question of questions){
  const shuffledOptions=[]
  while (shuffledOptions.length<4){
    const option=question.options[Math.floor(Math.random()*4)]
    !(shuffledOptions.includes(option)) && shuffledOptions.push(option)
  }
  question.options=shuffledOptions
}
console.log(questions)

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

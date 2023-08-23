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

for (const question of questions){ // for each question
  const shuffledOptions=[]
  while (shuffledOptions.length<question.options.length){ // until shuffled array is as big as og array
    const option=question.options[Math.floor(Math.random()*question.options.length)] // pick random option
    !(shuffledOptions.includes(option)) && shuffledOptions.push(option) // if not in shuffled, push
  }
  question.options=shuffledOptions // overwrite options with shuffled options
}

// gonna make a better shuffle algorithm that takes option[i] & inserts it at a random index before it
// for (const question of questions){
//   for (i=0;i<question.options.length;i++){
//     question.options[i]
//   }
// }

function App() {
  const [currentQuestion,setCurrentQuestion]=useState(0)
  const [score,setScore]=useState(0)

  return(
    <section className="quiz_container">
      <h1 className='title'>the quiz</h1>
      <br/>
      {currentQuestion<questions.length ? // while running through questions
        <>
          <QuizInfo score={score} currentQuestion={currentQuestion}/>
          <br/>
          <QuestionContainer question={questions[currentQuestion]} score={score}
          setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
        </>
      : <Finish score={score} total={questions.length}/>} {/* after answering all questions */}
    </section>
  )
}

export default App

import {useEffect, useState} from 'react'
import QuizInfo from "./components/QuizInfo"
import QuestionContainer from "./containers/QuestionContainer"
import Finish from "./components/Finish"

// const questionz=[
//   {question: "What was the name of the first computer virus that spread in the wild?",
//   options: ["Brain", "Creeper", "ILOVEYOU", "Melissa"],
//   answer: "Brain"},

//   {question: "Which programming language is often referred to as the 'mother of all languages'?",
//   options: ["C", "Java", "Fortran", "Assembly"],
//   answer: "C"},

//   {question: "In what year was the company Google founded?",
//   options: ["1998","1996", "2000", "2004"],
//   answer: "1998"}
// ];

// gonna make a better shuffle algorithm that takes option[i] & inserts it at a random index before it
// for (const question of questionz){
//   for (i=0;i<question.options.length;i++){
//     question.options[i]
//   }
// }


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
      const shuffledOptions=[]
      while (shuffledOptions.length<apiQuestion.options.length){ // until shuffled array is as big as og array
        const option=apiQuestion.options[Math.floor(Math.random()*apiQuestion.options.length)] // pick random option
        !(shuffledOptions.includes(option)) && shuffledOptions.push(option) // if not in shuffled, push
      }
      // format question & add to array
      formattedQuestions.push({question:apiQuestion.question,options:shuffledOptions,answer:apiQuestion.correct_answer})
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

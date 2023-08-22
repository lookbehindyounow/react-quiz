import {useState} from "react"
import Option from "../components/Option"

function QuestionContainer({question,score,setScore,currentQuestion,setCurrentQuestion}){
    const [selectedOption,setSelectedOption]=useState(null)
    const [submitted,setSubmitted]=useState(false)

    const selectOption=(i)=>{
        setSelectedOption(i)
    }
    const submitOption=()=>{
        if (selectedOption!=null){
            if (selectedOption==0){
                setScore(score+1)
            }
            setSelectedOption(null)
            setCurrentQuestion(currentQuestion+1)
            setSubmitted(false)
        }
    }

    return(
        <div className='question_container'>
            <h3 className='question'>{question.question}</h3>
            <br/>
            <div className='options'>
            {question.options.map((option,i)=><Option content={option} submitted={submitted}
            selectedOption={selectedOption} selectOption={selectOption} i={i} key={i}/>)}
            </div>
            <br/>
            <button className="submit" onClick={()=>{
                setTimeout(submitOption,2000)
                setSubmitted(true)
            }}>submit</button>
        </div>
    )
}
export default QuestionContainer
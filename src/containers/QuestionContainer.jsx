import {useState} from "react"
import Option from "../components/Option"

function QuestionContainer({question,score,setScore,currentQuestion,setCurrentQuestion}){
    const [selectedOption,setSelectedOption]=useState(null)
    const [submitted,setSubmitted]=useState(false)

    const submitOption=()=>{ // on submit
        if (selectedOption!=null){ // if an option is selected
            setSubmitted(true)
            setTimeout( () => { // after 2 second delay (to read if your answer was right)
                if (question.options[selectedOption]==question.answer){
                    setScore(score+1) // update score if correct
                }
                setSubmitted(false)
                setSelectedOption(null)
                setCurrentQuestion(currentQuestion+1) // next question
            },2000)
        }
    }

    return(
        <div className='question_container'>
            <h3 className='question'>{question.question}</h3>
            <br/>
            <div className='options'>
                {question.options.map((option,i)=> // react element for each option
                    <Option option={option} correct={option==question.answer} submitted={submitted}
                    selected={selectedOption==i} selectOption={()=>{submitted?null:setSelectedOption(i)}}
                    i={i} key={i}/>)} {/* if submitted, selectOption does nothing^^, otherwise selects self */}
            </div>
            <br/>
            {submitted? // if submitted, show colour key for answers
                <p className="colour_key">
                    <span className="text_red">red - correct!</span>
                    <span className="text_green">green - wrong</span>
                </p>
            : <button className="submit" onClick={submitOption}>submit</button>}
            {/* ^^otherwise show submit button */}
        </div>
    )
}
export default QuestionContainer
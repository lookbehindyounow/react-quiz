import {useState} from "react"
import Option from "../components/Option"

function QuestionContainer({question,score,setScore,currentQuestion,setCurrentQuestion}){
    const [selectedOption,setSelectedOption]=useState(null)
    const [submitted,setSubmitted]=useState(false)

    const submitOption=()=>{
        if (selectedOption!=null){
            setSubmitted(true)
            setTimeout( () => {
                if (selectedOption==0){
                    setScore(score+1)
                }
                setSubmitted(false)
                setSelectedOption(null)
                setCurrentQuestion(currentQuestion+1)
                shuffle=true
            },2000)
        }
    }

    const options=question.options.map((option,i)=><Option content={option} submitted={submitted}
    selectedOption={selectedOption} selectOption={()=>{submitted?null:setSelectedOption(i)}} i={i} key={i}/>)
    const shuffledOptions=[]
    while (shuffledOptions.length<4){
        const option=options[Math.floor(Math.random()*4)]
        !(shuffledOptions.includes(option)) && shuffledOptions.push(option)
    }

    return(
        <div className='question_container'>
            <h3 className='question'>{question.question}</h3>
            <br/>
            <div className='options'>
                {shuffledOptions}
            </div>
            <br/>
            {submitted?
                <p className="colour_key">
                    <span className="text_red">red - correct!</span>
                    <span className="text_green">green - wrong</span>
                </p>
            : <button className="submit" onClick={submitOption}>submit</button>}
        </div>
    )
}
export default QuestionContainer
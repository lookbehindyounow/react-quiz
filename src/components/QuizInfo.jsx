function QuizInfo({score,currentQuestion}){
    return(
        <div className='quiz_info'>
            <p>Q:{currentQuestion+1}</p>
            <p>Score:{score}</p>
        </div>
    )
}
export default QuizInfo
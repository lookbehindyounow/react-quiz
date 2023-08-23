function Option({option,correct,submitted,selected,selectOption,i}){
    return(
        <button className={"option "+( // <-- option is css class applied to all
            // colour class depends on 3 booleans
            selected  ?  (submitted ? (correct?"red":"green") : "blue")  :  (submitted && correct && "red")
        )} onClick={selectOption}>{option}</button>
    )
}
export default Option
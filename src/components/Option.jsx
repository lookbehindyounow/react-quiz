function Option({content,correct,submitted,selectedOption,selectOption,i}){
    return(
        <button className={"option "+(
            selectedOption==i   ?   (submitted ? (correct?"red":"green") : "blue")   :   (submitted && correct && "red")
        )} onClick={selectOption}>{content}</button>
    )
}
export default Option
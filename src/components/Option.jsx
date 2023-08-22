import {useState} from "react"

function Option({content,submitted,selectedOption,selectOption,i}){
    return(
        <button className={"option "+(
            selectedOption==i   ?   (submitted ? (i==0?"red":"green") : "blue")   :   (submitted && (i==0&&"red"))
        )} onClick={selectOption}>{content}</button>
    )
}
export default Option
import {useState} from "react"

function Option({content,submitted,selectedOption,selectOption,i}){
    return(
        <button className={"option "+(
            selectedOption==i   ?   (submitted ? (i==0?"green":"red") : "blue")   :   (submitted && (i==0&&"green"))
        )} onClick={()=>selectOption(i)}>{content}</button>
    )
}
export default Option
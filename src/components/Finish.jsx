function Finish({score,total}){
    return(
        <>
            <h1>{score}/{total}</h1>
            <p>{score/total>0.5?"nice one":"you suck"}</p>
        </>
    )
}
export default Finish
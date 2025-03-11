export default function ProgressBar({progressvalue}) {
    return (
    <div className="progressbar-exercice">
            <h1>progressbar Exercice</h1>
            <h4>Progress value : {progressvalue} %</h4>
            <div style={{height: "2rem" , width: "20rem" , border: "solid red 1px" , display: "flex" , alignItems: "center" , justifyContent: "flex-start"}}>
                <div style={{height: "1rem" , width: `${progressvalue}%` , backgroundColor: "blue" , transition: "0.5s"}}></div>
            </div>
        </div>
        )
}
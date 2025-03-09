export default function Timer({currentCount}) {
    return (
        <div className="exercice-timer">
            <h1>Exercice Counter</h1>
            <h2 style={{textAlign:"center"}}>{currentCount}</h2>
        </div>
    )
}
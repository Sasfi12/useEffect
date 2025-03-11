export default function Timer({currentCountMinutes , currentCountSeconds}) {
    return (
        <div className="exercice-timer">
            <h1>Exercice Counter</h1>
            <h2 style={{textAlign:"center"}}>{currentCountMinutes}:{currentCountSeconds}</h2>
        </div>
    )
}
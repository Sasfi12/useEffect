export default function Chrono({minutes , seconds}) {
    return (
        <div className="count-exercice">
            <h1>Timecount Exercice</h1>
            <h2>Current Time : {minutes}: { seconds < 10 ? "0" + seconds :seconds  }</h2>
        </div>
    )
} 
export default function Count({count , increment , decrement}) {
    return  (
        <div className="count-exercice">
            <h1>Count Exercice</h1>
            <h2>Number : {count}</h2>
            <button onClick={increment}>+</button> <button onClick={decrement}>-</button>
        </div>
    )
}
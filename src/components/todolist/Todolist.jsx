export default function ToDoList({shownElems}) {
    
    return (
    <div style={{display: "flex" , flexDirection: "column" , alignItems: "center"}}>
    <h1>Exercice Todolist Searchbar</h1>
    <input type="search" />
    <ul style={{padding: "0"}} >
        {shownElems.map( (e) => {
            return (
                <li style={{listStyle: "none" , textAlign: "center"} }>{e}</li>
            )
            
        } )}
    </ul>
    </div>
    )
}
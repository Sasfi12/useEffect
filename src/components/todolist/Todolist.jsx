import "./Todolist.css"
export default function ToDoList({shownElems , newSearch}) {
    
    return (
    <div style={{alignItems: "center"}}>
    <h1>Exercice Todolist Searchbar</h1>
    <input type="search" onChange={newSearch} />
    <ul className="shownElems">
        {shownElems.map( (e , index) => {
           return (
               <input key={index} value={e} />
            )
            
        } )}
    </ul>
    </div>
    )
}
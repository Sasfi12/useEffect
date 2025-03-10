import { useEffect, useRef, useState } from 'react'
import './App.css'
import Count from './components/count/Count'
import Chrono from './components/chrono/Chrono'
import ProgressBar from './components/progressbar/Progressbar'
import Timer from './components/timer/Timer'
import ToDoList from './components/todolist/Todolist'

function App() {
  
  /*## Exo 1
- Créer un component Compteur. Ce component doit avoir un compteur qu'on peut incrémenter au click d'un bouton. À chaque fois que le component est mis à jour, afficher dans la console "Le component a été mis à jour" en utilisant useEffect
*/
let [count , setCount] = useState(0)
const increment = () => {setCount(++count)}
const decrement = () => {setCount(--count)} 
useEffect(() => {
  console.log("count is now " + count)
} , [count])
/*
## Exo 2
- Créer un component Chronomètre qui, grace au useEffect, va afficher un chronomètre qui s'incrémtente automatiquement toute les secondes. Le chronomètre doit etre formaté correctement, c'est à dire que par exemple quand on arrive à 61 secondes, le chronomètre doit afficher 1:01.
*/
let [seconds , setSeconds] = useState(0)
let [minutes , setMinutes] = useState(0)
let interval = useRef(null)

useEffect(() => {
  interval.current = setInterval(() => {
    setSeconds((prevSeconds) => prevSeconds + 1);
  }, 1000); // Set interval to 1s for realistic timing

  return () => clearInterval(interval.current);
}, []);

// Effect to increment minutes when seconds reach 60
useEffect(() => {
  if (seconds >= 60) {
    setMinutes((prevMinutes) => ++prevMinutes );
    setSeconds(0);
  }
}, [seconds]);
 

/*
## Exo 3
- Créer un component ProgressBar qui contient une bar de progression qui se remplit en fonction du temps. La barre doit commencer vide et se remplir jusqu'à 100% en 10 secondes. 
Utilisez le Hook useEffect pour mettre à jour la barre de progression toutes les secondes et useState pour stocker la valeur actuelle de remplissage
*/ 
let [progressValue , setProgressValue] = useState(0); 
let progressInterval = useRef(null) ; 
 useEffect(() => {
  
   progressInterval.current = setInterval(() => {
    console.log(progressValue)
     setProgressValue(previousProgress => {
      if(previousProgress >= 100 ) {

        return clearInterval(progressInterval.current) , 100} 
      else { 
        return previousProgress + 10} 
      }
    ) 

   } , 1000)
   return () => clearInterval(progressInterval.current)
 } , [])
 

/*
## Exo 4
- Créer un component Timer qui va afficher un compte à rebours. 
Utiliser le useEffect pour gèrer les secondes à retirer et useState pour gèrer l'affichage du compte à rebours.
*/ 
let [countdown , setCountdown] = useState(10); 
let countdownInterval = useRef(null)
useEffect(() => {
  countdownInterval.current = setInterval(() => {
    setCountdown(currentCount => { 
      if (currentCount - 1 == 0) clearInterval(countdownInterval.current)
      return currentCount - 1    })
    
  } , 1000)
  return () => clearInterval(countdownInterval.current)
}, [])
 
/*
## Exo 5
- Créer un component ToDoList qui contient une liste de taches qui auront chacune un titre. 
Dans ce component se trouve également une bar de recherche qui va permettre de filtrer les taches. 
Utiliser useEffect pour mettre à jour la liste de taches en fonction de la recherche de l'utilisateur et useState pour stocker les taches et la valeur de recherche.
*/
const todoList = [  "task 1" ,"task 2" ,"task 3"  ,"task 4"  ,"objective 1" ,  "objective 2"  , "objective 3"  , "objective 4"  ]
const [shownElems , setShownElems] = useState(...[todoList])
const [currentSearch , setCurrentSearch] = useState("task 1")
function newSearch(e) {
  setCurrentSearch(e.target.value)
  console.log(e.target.value)
}
useEffect(() => {
  setShownElems(...[todoList.filter(elem => elem.toLowerCase().trim().includes(currentSearch.trim().toLowerCase()))])
}, [currentSearch])
/*
## Exo 6
- Créer un component AnimatedButton qui contient un bouton. Lorsqu'on clique sur le bouton il va faire apparaitre un carré qui va clignoter toutes les secondes. 
Lorsqu'on rappuis dessus le carré disparait. Utiliser useState pour gèrer l'état d'affichage du carré et useEffect pour lancer/arreter l'animation
*/ 
 
/*
## Exo 7
- Créer un component ProductList qui va afficher des produits venant d'un .JSON. 
Utiliser useState pour l'affichage des produits et 
useEffect pour charger les produits au moment du montage. 
Les données sont charger qu'une fois.
*/
  return (
    <>
    <main>
      <h1 className='titre'>useEffect</h1>
      <hr />
      <Count count={count} increment={increment} decrement={decrement}/>
      <hr />
      <Chrono minutes={minutes} seconds={seconds}/>
      <hr />
      <ProgressBar progressvalue={progressValue} />
      <hr />
      <Timer currentCount={countdown} />
      <hr />
     <ToDoList shownElems={shownElems} newSearch={newSearch}/>
     <hr />
    </main>
    </>
  )
}

export default App

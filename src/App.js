import logo from './logo.svg';
import './App.css';
import {nanoid} from "nanoid"
import React from 'react';
import Dice from './Dice';
import Confetti from 'react-confetti'
function App() {
  
  function HoldDice(id) {
    setdice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHeld: !die.isHeld} :
            die
    }))
}
  
function allNewDice() {
  const newDice = []
  for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
  }
  return newDice
}

function generateNewDie() {
  return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
  }
}
const[dice,setdice]=React.useState(allNewDice())
const dices =dice.map(die=>{
  return(
    <Dice value={die.value}
    isHeld={die.isHeld}
    id={die.id}
    HoldDice={()=>HoldDice(die.id)}
    />
  )
})
function handleclick()
{
  
    setdice(oldDice => oldDice.map(die => {
        return die.isHeld ? 
            die :
            generateNewDie()
    }))
}

const [Tenzies,setTenzies]=React.useState(false)
React.useEffect(() => {
  
  const allHeld = dice.every(die => die.isHeld)
  const firstValue = dice[0].value
  const allSameValue = dice.every(die => die.value === firstValue)
   
  if (allHeld && allSameValue) {
      setTenzies(true)
      console.log("You won!")
  }
}, [dice])

  
  return (
    <>
    {Tenzies && <Confetti width="1600px"/>}
    <div className="cont1">


        </div>
        <div className="cont2">
<h1 className="head">Tenzies</h1>
<p className="para">Roll until all dice are the same.</p>
<p className="para2"> Click each die to freeze it at its current value between rolls.</p>
<div className="cont3">
    {dices}
    

</div>

<button className='rolldicebutton' onClick={handleclick}>{Tenzies?"You Won":"Roll"}</button>
<br/>
<h3 className='cong'>{Tenzies?"Congratulations You won !":""}</h3>

</div>

    </>
  );
}

export default App;

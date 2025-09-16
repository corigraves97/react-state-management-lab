import {useState} from 'react'
import './App.css'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
])

//handleFighter function
const handleAddFighter=(zombieFighter) => {
  if(money < zombieFighter.price) {
    console.log('Not Enough Money')
    return
  }
  const updatedFighters = zombieFighters.filter(pickedFighter => pickedFighter.id !== zombieFighter.id)
  const newMoney = money - zombieFighter.price
  
  setTeam([...team, zombieFighter])
  setZombieFighters(updatedFighters)
  setMoney(newMoney)
}

//removeFighter function
const handleRemoveFighter = (zombieFighter) => {
  const updatedTeam = team.filter(removedFighter => removedFighter.id !== zombieFighter.id)
  const newMoney = money + zombieFighter.price
  setTeam(updatedTeam)
  setZombieFighters([zombieFighter, ...zombieFighters])
  setMoney(newMoney)
}

//iterate over strength in array and add together
let totalStrength = 0
for (let i=0; i < team.length; i++){
  totalStrength += team[i].strength
}
//same for agility
let totalAgility = 0
for (let i=0; i < team.length; i++){
  totalAgility += team[i].agility
}

  return (
    <>
      <h1>Hello Player!</h1>
      <h2>You have ${money} left</h2>
      <h2>{team.length < 1 ? 'Pick Your Team' : 'Add Another Fighter'} </h2>
      <ul>
        {zombieFighters.map((zombieFighter) => (
        <li key={zombieFighter.id}>
          <img src={zombieFighter.img}/>
          <h2>{zombieFighter.name}</h2>
          <p>Price: ${zombieFighter.price}</p>
          <p>Strength: {zombieFighter.strength}</p>
          <p>Agility: {zombieFighter.agility}</p>
          <button onClick={() => handleAddFighter(zombieFighter)}>Add {zombieFighter.name} to Team!</button>
        </li>
        ))}
    </ul>
     <h2>Team</h2>
      <ul>
        {team.map((zombieFighter) => (
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img} />
            <h2>{zombieFighter.name}</h2>
            <p>Price: ${zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick ={() => handleRemoveFighter(zombieFighter)}> Remove {zombieFighter.name} from Team!</button>
          </li>
        ))}
        <p>Total Strength: {totalStrength}</p>
        <p>Total Agility: {totalAgility} </p>
      </ul>
  </>
  );
}

export default App

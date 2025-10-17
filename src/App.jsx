//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainGoal from './components/MainGoal'
import FirstComponent from './components/FirstComponent'
import Card from './components/Card'
import userData from './data/userData'
import CourseGoal from './components/CourseGoal'
import courseInfo from './data/courseInfo'
import Button from './components/Button'

/*let mySubject = "React";

const subjects = ['JS', 'CSS', 'React', 'Bases de dados'];
//vou à base de dados e verifico que o módulo é SQL
*/

const objectvs = ['Aprender React e construir aplicações incríveis!', 'Fazer interfaces user friendly!', 'Ter o meu código optimizado!']

/*function getRandomForSubject(max) {
  return Math.floor(Math.random() * max);
}

mySubject = subjects[getRandomForSubject(4)];

let product = {
  name: 'caneta',
  price: 5,
  color: 'yellow'
};*/


function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <FirstComponent/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <MainGoal objetivo = {objectvs[0]}/>
      <MainGoal objetivo = {objectvs[1]}/>
      <MainGoal objetivo = {objectvs[2]}/>
      <MainGoal objetivo = 'Construir uma aplicaçao com servidor!'/>
      <h1>Front End Developer: React</h1>
      <CourseGoal {...courseInfo} />
      <Card 
       {...userData}
      />
      <Card 
      firstName='António'
      title= 'Gestor'
      />
      <Card 
      firstName='Cristina'
      title='Gestora Pedagógica'
      />

      <Button>Submeter</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

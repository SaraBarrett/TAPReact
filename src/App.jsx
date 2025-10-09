import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let mySubject = "React";

const subjects = ['JS', 'CSS', 'React', 'Bases de dados'];
//vou à base de dados e verifico que o módulo é SQL

function getRandomForSubject(max) {
  return Math.floor(Math.random() * max);
}

mySubject = subjects[getRandomForSubject(4)];

let product = {
  name: 'caneta',
  price: 5,
  color: 'yellow'
};

function FirstComponent(){
  return(
  <header>
    <h5>Aqui tenho o meu primeiro componente!</h5>
  </header>
  )
}

function MainGoal(){
  return (
    <div>
        <p>O meu objectivo é aprender {mySubject} e construir aplicações incríveis.</p>
        <p>O objecto é {product.name} e o preço é {product.price} euros</p>
    </div>
)
}

function App() {
  const [count, setCount] = useState(0)

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
      <MainGoal/>
      <h1>Front End Developer: React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

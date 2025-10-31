import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainGoal from './components/MainGoal'
import FirstComponent from './components/FirstComponent'
import CourseGoal from './components/CourseGoal'
import courseInfo from './data/courseInfo'
import Button from './components/Button'
import Login from './components/Login'
import { useState } from 'react'
import Discount from './components/Discount'
import ReactSubject from './components/ReactSubject'
import Delete from './components/Delete'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contacts from './pages/Contacts'
import RootLayout from './components/layouts/rootLayout'

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

const router = createBrowserRouter([
  {path:'/', 
  element: <RootLayout/>,
  children:[
  {path: '/' ,element: <HomePage/>},
  {path: '/contacts', element: <Contacts/>}
  ]}
]);

function App() {

  return <RouterProvider router={router} />
  //const [count, setCount] = useState(0)

  //variáveis sem estado
  //let chosenSubject = 'Escolha a matéria:';

  //estados do react -> useState()
  const[chosenSubject, setChosenSubject] = useState('Escolha a matéria:');

  //função para o botão de submeter
  function alertPayDate(){
    alert('Atenção à data de pagamento!');
  }

  //função que vai tomar conta do clique das matérias
  function getSubject(subject){
    //alert('matéria completa de ' + subject);
    setChosenSubject('a matéria é: '+ subject);
 
  }

  return (
    <>
    <Delete/>
    <ReactSubject/>
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
    

      <Button functionForClick={alertPayDate}>Submeter</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h3>Eventos Dinâmicos</h3>
      <menu>
          <Button functionForClick={() => getSubject('JS')}>Matéria JS</Button>
          <Button functionForClick={() =>getSubject('React')}>Matéria React</Button>
          <Button functionForClick={() =>getSubject('SQL')}>Matéria SQL</Button>
        <div>
            {chosenSubject}
        </div>
      </menu>

      <Login/>
      <Discount/>
    </>
  )
}

export default App

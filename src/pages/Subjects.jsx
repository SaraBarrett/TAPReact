
import { Link } from 'react-router-dom'
import ReactSubject from '../components/ReactSubject'
import MainGoal from '../components/MainGoal'
import CourseGoal from '../components/CourseGoal'
import courseInfo from '../data/courseInfo'
import { useState } from 'react'
import Button from '../components/Button'



export default function Subjects(){
  //estados do react -> useState()
  const[chosenSubject, setChosenSubject] = useState('Escolha a matéria:');

  const objectvs = ['Aprender React e construir aplicações incríveis!', 'Fazer interfaces user friendly!', 'Ter o meu código optimizado!']

    //função que vai tomar conta do clique das matérias
  function getSubject(subject){
    //alert('matéria completa de ' + subject);
    setChosenSubject('a matéria é: '+ subject);
 
  }
  
    return(<div>
        <h3>Matéria</h3>
        <ReactSubject/>
        <MainGoal objetivo = {objectvs[0]}/>
        <MainGoal objetivo = {objectvs[1]}/>
        <MainGoal objetivo = {objectvs[2]}/>
        <MainGoal objetivo = 'Construir uma aplicaçao com servidor!'/>
        <h1>Front End Developer: React</h1>
        <CourseGoal {...courseInfo} />

        <h3>Eventos Dinâmicos</h3>
        <menu>
            <Button functionForClick={() => getSubject('JS')}>Matéria JS</Button>
            <Button functionForClick={() =>getSubject('React')}>Matéria React</Button>
            <Button functionForClick={() =>getSubject('SQL')}>Matéria SQL</Button>
          <div>
              {chosenSubject}
          </div>
        </menu>
        
        <Link to="/">Home</Link>
    </div>)
}
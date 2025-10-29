import { useState } from 'react';
import Button from './Button';
import { EXAMPLES } from '../data/coreConcepts';

export default function ReactSubject(){
    const[description, setDescription] = useState();

    function changeSubject(subject){
        setDescription(subject);
    }

    return(
        <div>
            <h3>Matéria de React</h3>
            <menu>
                <Button isActive={description == 'jsx'} functionForClick={() =>changeSubject('jsx')} >JSX</Button>
                <Button isActive={description == 'props'}  functionForClick={() =>changeSubject('props')} >Props</Button>
                <Button isActive={description == 'state'}  functionForClick={() =>changeSubject('state')} >State</Button>
            </menu>
            {description && 
            <div>
                <h4>{EXAMPLES[description].title ? EXAMPLES[description].title : 'título não carregado'}</h4>
                <p>{EXAMPLES[description].description}</p>
                
            </div>
            }
        </div>
    )
}
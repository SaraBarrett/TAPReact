import { useState } from 'react';
import Button from './Button';
import { EXAMPLES } from '../data/coreConcepts';

export default function ReactSubject(){
    const[description, setDescription] = useState('components');

    function changeSubject(subject){
        setDescription(subject);
    }

    return(
        <div>
            <h3>Matéria de React</h3>
            <menu>
                <Button functionForClick={() =>changeSubject('jsx')} >JSX</Button>
                <Button functionForClick={() =>changeSubject('props')} >Props</Button>
                <Button functionForClick={() =>changeSubject('state')} >State</Button>
            </menu>
            <div>
                <h4>{EXAMPLES[description].title}</h4>
                <p>{EXAMPLES[description].description}</p>
                
            </div>
        </div>
    )
}
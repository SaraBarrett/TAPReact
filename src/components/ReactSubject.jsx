import { useState } from 'react';
import Button from './Button';

export default function ReactSubject(){
    const[description, setDescription] = useState('Escolha um tema:');

    return(
        <div>
            <h3>Matéria de React</h3>
            <menu>
                <Button functionForClick={() =>changeSubject('JSX')} >JSX</Button>
                <Button>Props</Button>
                <Button>State</Button>
            </menu>
            <div>
                {description}
            </div>
        </div>
    )
}
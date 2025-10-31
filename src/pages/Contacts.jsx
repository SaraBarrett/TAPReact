import Card from '../components/Card'
import userData from '../data/userData'
import { Link } from 'react-router-dom'


export default function Contacts(){
    return(<div>
        <h3>Os meus contactos</h3>
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
      <Link to="/">Home</Link>
    </div>)
}
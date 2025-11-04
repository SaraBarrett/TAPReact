import { Link } from 'react-router-dom'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import Button from '../components/Button'
import Delete from '../components/Delete'
import Discount from '../components/Discount'
import FirstComponent from '../components/FirstComponent'
import Login from '../components/Login'


export default function Exs(){
  
    //função para o botão de submeter
    function alertPayDate(){
      alert('Atenção à data de pagamento!');
    }
    
    return(<div>
        <h3>Exs</h3>
        
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <Delete/>
        <FirstComponent/>
        
        <Button functionForClick={alertPayDate}>Submeter</Button>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        
      <Button functionForClick={alertPayDate}>Submeter</Button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      
      <Login/>
      <Discount/>
      <Link to="/">Home</Link>
    </div>)
}
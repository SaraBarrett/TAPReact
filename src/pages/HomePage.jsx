import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function HomePage(){
    const location = useLocation();
    const message = location.state?.message;
    const {logout, user} = useContext(AuthContext)

    return(<div>
        {message && <p>{message}</p>}
        
        <h3>As minhas funcionalidades</h3>
        <Link to="/contacts">Os meus contactos</Link>
        <br />
        <Link to="/subjects">Os meus subjects</Link>
        <br />
        <Link to="/exs">Os meus exs</Link>
           <br />

        {(user && user.role == 'student') &&  
        <Link to="/courses">Cursos do Cesae</Link>
        }
    
        {!user ?
        <div>
            <Link to="/login">Login</Link><br />
            <Link to="/register">Registo</Link>
        </div>
        :<div>
        <br/>
          <button onClick={logout}>Logout</button>
        </div> 

        }
    
      
    </div>)
}
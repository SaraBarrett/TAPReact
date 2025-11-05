import { Link } from "react-router-dom";

export default function HomePage(){
    return(<div>
        <h3>As minhas funcionalidades</h3>
        <Link to="/contacts">Os meus contactos</Link>
        <br />
        <Link to="/subjects">Os meus subjects</Link>
        <br />
        <Link to="/exs">Os meus exs</Link>
           <br />
        <Link to="/courses">Cursos do Cesae</Link>
    </div>)
}
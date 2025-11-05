import { Link } from "react-router-dom";

export default function Courses(){

    //vai à base de dados, tabela cursos, e traz todos os cursos inscritos na base de dados numa forma de array: cursos = []
    return(
        <div>
        <h6>Aqui estão os cursos do cesae</h6>

        {/* ciclo for que itera o array de cursos e para cada um mostra nome do curso, duração, regime e link para abrir uma nova página com toda a info do curso
         */}

        <Link to='/course/react'>Curso React</Link><br />
        <Link to='/course/laravel'>Curso Laravel</Link><br />
        <Link to='/course/js'>Curso js</Link>
        </div>
    )
}
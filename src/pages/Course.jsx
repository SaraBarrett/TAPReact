import { Link, useParams } from "react-router-dom";

export default function Course(){
    //buscar na base de dados toda a info sobre o curso onde o user clicou : exemplo react

    let {course_name} = useParams();
    
   
    return(
        <div>
        
        <h6>Aqui está a info de um curso {course_name}</h6>


        </div>
    )
}
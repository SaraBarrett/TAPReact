import Button  from "./Button";

  
function CourseGoal({title, description}){
    function alertHeySend(){
        alert('Documentos enviados!')
    }    


    return (<div>
        <h2>Title: {title}  </h2>
        <p>Description: {description} </p>
        <Button functionForClick={alertHeySend} >Enviar</Button>
    </div>);
}


export default CourseGoal;
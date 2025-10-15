import Button  from "./Button";


function CourseGoal({title, description}){
    return (<div>
        <h2>Title: {title}  </h2>
        <p>Description: {description} </p>
        <Button></Button>
    </div>);
}


export default CourseGoal;
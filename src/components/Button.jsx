import './Button.css'

export default function Button({children, functionForClick}){


    return <button onClick={functionForClick} >{children}</button>;
}



import './Button.css'

export default function Button({children, functionForClick, isActive}){


    return <button className={isActive && 'rose'} onClick={functionForClick} >{children}</button>;
}



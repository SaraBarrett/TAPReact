import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from '../contexts/AuthContext'

export default function RouteForStudents({element}){
    const {user} = useContext(AuthContext);

    console.log(user)

    if((user && user.role != 'student') || !user){
        return <Navigate to='/login' replace/>
    }

    return element;

}
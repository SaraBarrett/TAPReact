
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Contacts from './pages/Contacts'
import RootLayout from './components/layouts/rootLayout'
import Subjects from './pages/Subjects'
import Exs from './pages/Exs'
import ErrorPage from './pages/ErrorPage'
import Courses from './pages/Courses'
import Course from './pages/Course'
import ShoppingList from './pages/ShoppingPage'
import AvailablePlaces from './pages/PlacesIndex'
import StarWarsPeople from './pages/StarWarsPeople'
import Signup from './pages/Signup'
import { AuthProvider } from './contexts/AuthContext'
import Login from './pages/Login'
import RouteForStudents from './protectedRoutes/RouteForStudents'
/*let mySubject = "React";

const subjects = ['JS', 'CSS', 'React', 'Bases de dados'];
//vou à base de dados e verifico que o módulo é SQL
*/

/*function getRandomForSubject(max) {
  return Math.floor(Math.random() * max);
}

mySubject = subjects[getRandomForSubject(4)];

let product = {
  name: 'caneta',
  price: 5,
  color: 'yellow'
};*/

const router = createBrowserRouter([
  {path:'/', 
  element: <RootLayout/>,
  errorElement: <ErrorPage/>,
  children:[
    {path: '/' ,element: <HomePage/>},
    {path: '/contacts', element: <Contacts/>},
    {path: '/subjects', element: <Subjects/>},
    {path: '/exs', element: <Exs/>},
    {path: '/courses', element:<RouteForStudents element={<Courses/>} />},
    {path: '/course/:course_name', element: <Course/>},
    {path: '/shoppingList', element: <ShoppingList/>},
    {path: '/places', element: <AvailablePlaces/>},
    {path: '/swpeople', element: <StarWarsPeople/>},
    {path: '/register', element: <Signup/>},
    {path: '/login', element: <Login/>},
  ]}
]);

function App() {

  return (
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  )
 
  //const [count, setCount] = useState(0)

  //variáveis sem estado
  //let chosenSubject = 'Escolha a matéria:';

}

export default App


import globeImg from '../assets/globe.png'
import Places from '../components/places/Places'
import { useState, useEffect } from 'react';
import {updateUserPlaces} from '../https'

export default function AvailablePlaces() {
  // houve uma alteração de estado: recebemos dados e vamos mudar o dom com esses dados
    const[AvailablePlaces, setAvailablePlaces] = useState([]);
    const[userPlaces, setUserPlaces] = useState([]);



  //código que consulta backend e traz os dados de lugares disponiveis para escolha
    useEffect(() =>{
      fetch('http://localhost:3000/places')
      .then((response) => {    
        return response.json()})
      .then((resData) =>{
  
        setAvailablePlaces(resData.places)
      })
    }, [])

    //função que quando clicamos nos lugares disponíveis toma conta do que vamos fazer com esse lugar
    function handleSelectPlace(onSelectPlace){

      //tomar conta e actualizar visualmente o react
      setUserPlaces((prevPickedPlaces) => {
          if (!prevPickedPlaces){
            prevPickedPlaces = []
          }
          if (prevPickedPlaces.some((place) => place.id === onSelectPlace.id)){
            return prevPickedPlaces
          }  
          return[onSelectPlace, ...prevPickedPlaces]
        })


      //enviar o ficheiro para actualizar no backend os lugares escolhidos
      updateUserPlaces([onSelectPlace, ...userPlaces])
    }




  return (
    <>
    <div>
      <img src={globeImg} alt="Stylized globe" />
      <h1>PlacePicker</h1>
      <p>
        Create your personal collection of places you would like to visit or
        you have visited.
      </p>
    </div>
    <main>
      <Places
        title="User Places"
        fallbackText="Please Select Places from below"
        places={userPlaces}
      />
      <Places
        title="Available Places"
        fallbackText="No Places Available"
        places={AvailablePlaces}
        onSelectPlace={handleSelectPlace}
      />
    </main>
  </>
  );
}

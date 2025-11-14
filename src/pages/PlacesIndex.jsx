
import globeImg from '../assets/globe.png'
import Places from '../components/places/Places'
import { useState, useEffect } from 'react';

export default function AvailablePlaces() {
    const[AvailablePlaces, setAvailablePlaces] = useState([]);

    useEffect(() =>{
      fetch('http://localhost:3000/places')
      .then((response) => {return response.json()})
      .then((resData) =>{
        setAvailablePlaces(resData.places)
      })
    }, [])


  //código que consulta backend

  // houve uma alteração de estado: recebemos dados e vamos mudar o dom com esses dados
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
        title="Available Places"
        fallbackText="No Places Available"
        places={AvailablePlaces}
      />
    </main>
  </>
  );
}

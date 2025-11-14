import { useState, useEffect } from "react";

export default function StarWarsPeople(){
    const [people, setPeople] = useState([]);

    useEffect(()=>{
        fetch('https://swapi.dev/api/people')
        .then((response) => {return response.json()})
        .then((resData)=>{
            setPeople(resData.results)
        })
    }, [])


    return (
    <section>
        {(!people || people.length === 0) && (
        <p className="fallback-text">Ups, não temos personagens disponíveis</p>
        )}
    
        {(people && people.length > 0) && (
        <div className="places">
            {people.map((item) => (
            <p key={item.name} className="place-item">
                <p>
                <b>{item.name}</b>: {item.birth_year}, {item.gender}
                </p>
            </p>
            ))}
        </div>
        )}
    
    </section>
    )
}
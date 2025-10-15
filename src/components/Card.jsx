
export default function Card({firstName, lastName='Silva', title='Programador'}){
  
  return(
       <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <p>{firstName} {lastName}</p>
        <p>{title}</p>
      </div>
  )
}
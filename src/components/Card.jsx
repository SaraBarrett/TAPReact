
export default function Card(props){
  return(
       <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <p>{props.firstName} {props.lastName}</p>
        <p>{props.title}</p>
      </div>
  )
}
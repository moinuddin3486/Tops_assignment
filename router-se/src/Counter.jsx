import { useState } from 'react'

let Counter=(props)=>{
    let [counter, setCounter] = useState(0)
  
  
    let add = () => counter < 20 ? setCounter(counter += 1) : null
    let minus = () => counter > 0 ? setCounter(counter -= 1) : null
    let reset = () => setCounter(0)
   
  return (
    
    <div >
      <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>Counter:{counter}</h2>
      <button onClick={add}>add {counter}</button><br></br><br></br>
      <button onClick={minus}>minuss {counter}</button><br></br><br></br>
      <button onClick={reset}>Reset {counter}</button>
    </div>
  );
}
export default Counter;
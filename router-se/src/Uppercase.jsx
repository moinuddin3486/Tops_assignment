import React, { useState } from 'react'

export default function Uppercase(props) {
  const [text, settext] = useState("")


  let handle = (e) => {

    settext(e.target.value)

  }
  let Upper = () => {
    let upr = text.toUpperCase()
    settext(upr)
  }
  let Lower = () => {
    let upr = text.toLowerCase()
    settext(upr)
  }
  let Copy = () => {
    navigator.clipboard.writeText(text)
  }
  let char;
  let word;
  let line;

  word = 0
  char = 0
  line = 0
  let w = text.match(/\S+/g)
  let space = text.match(/\S/g)
  let l = text.match(/\n/g)
  if (w != null) {
    word = w.length

  }

  if (space != null) {
    char = space.length
  }

  if (l != null) {
    line = l.length
  }







  return (
    <div className='container' style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h1 >Upper Case Converter ...</h1>
      <textarea name="" id="" className='container' rows={6} style={{ fontSize: 30, backgroundColor: props.mode === "dark" ? "grey" : "white", border: props.mode === "dark" ? "2px solid white" : "2px solid black", color: props.mode === "dark" ? "white" : "black" }} value={text} onChange={handle} ></textarea><br />
      <div className='container '>
        <button onClick={Upper} className='mx-1' >Uppercase</button>
        <button onClick={Lower} className='mx-1'>Lowercase</button>
        <button onClick={Copy} className='mx-1'>Copy text</button>
        <button onClick={() => settext("")} className='mx-1'>Clear Text</button>

      </div>
      <h4>{word} words and {char} character <br />
        Lines: {line}</h4>
    </div>
  )
}

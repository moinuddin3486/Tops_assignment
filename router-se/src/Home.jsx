import React from 'react'

const Home = (props) => {
  return (
    <div>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>Home Page...</h1>
    </div>
  )
}

export default Home

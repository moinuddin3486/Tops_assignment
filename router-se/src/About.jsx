import React from 'react'

const About = (props) => {
  return (
    <div>
      <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>About Page Called....</h1>
    </div>
  )
}

export default About

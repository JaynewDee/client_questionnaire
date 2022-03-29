import React from 'react'

const Greeting = (props) => {
  return (
     <>
      <h3 id="greeting">Hello, {props.name}</h3>
      <p id="thanks">
         Thank you for your time!
         <br />
         Please provide a couple of essential credentials to get started:
      </p>
    </>
  )
}



export default Greeting
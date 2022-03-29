import React from 'react'
import Greeting from './Greeting';


const Header:React.FC<{inputOne: string, inputTwo: string}> = (props) => {

  return (
    <div className="header">
       <Greeting name={props.inputOne + props.inputTwo}/>
    </div>
  )
}

export default Header;
import React, { useState } from 'react'
import Greeting from './Greeting';

const Header: React.FC = (props) => {
   const [ user, setUser] = useState('User')

   
  return (
    <div className="header">
       <Greeting name={user}/>
    </div>
  )
}

export default Header
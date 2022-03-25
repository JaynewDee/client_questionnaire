import React from 'react';
import {Header, FormArea} from '../components/index';
interface mainTypes {}

const Main: React.FC<mainTypes> = () => {
   
  return (
    <div>
       <Header />
       <FormArea />
    </div>
  )
}

export default Main;
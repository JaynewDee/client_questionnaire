import React from 'react';
import Question from './Question';
import Answer from './Answer';
import Credentials from './Credentials';

const FormArea: React.FC = () => {
  return (
     <>
         <Credentials />

         <div>
            <Question />
         </div>
      </>
  )
}

export default FormArea;
import React, { } from 'react';
import './styles/index.scss';

// ----- Component Imports ----- //
import  { FormArea }  from './components/index';
import Main from './pages/Main'

const App: React.FC = () => {


   return (
    <div className="App">      
      <Main>
         <FormArea />
      </Main>
    </div>
  );
}

export default App;

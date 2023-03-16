import React from 'react';
import ContextProvider from './store/ContexProvider';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {




  return (
    <ContextProvider>
      <Header></Header>
      <Main></Main>
    </ContextProvider>
  );
}

export default App;

import React, { useEffect } from 'react';
import logo from './logo.svg';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { Header } from './components/header/Header';
import { loadContent, isLoadingContent } from './components/ContentBox/ContentSlice';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const { failedToLoadContent } = useSelector((state) => state.content.failedToLoadContent); 
  let loadingContent = useSelector((state) => state.content.isLoadingContent)


  useEffect(() => {
    dispatch(loadContent());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {(loadingContent === true) ? <h1>LOADING</h1> : (failedToLoadContent === true) ? <h1>Failed To Load</h1> : <ContentContainer />}
      
    </div>
  );

}

export default App;

import React, { useEffect } from 'react';
import { ContentContainer } from './components/ContentContainer/ContentContainer';
import { Header } from './components/header/Header';
import { loadContent} from './components/ContentBox/ContentSlice';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const { failedToLoadContent } = useSelector((state) => state.content.failedToLoadContent); 
  let loadingContent = useSelector((state) => state.content.isLoadingContent);
  let page = useSelector((state) => state.content.page);
  console.log(page);
  let after = useSelector((state) => state.content.after);
  console.log(after);
  let useSearch = useSelector((state) => state.content.useSearch);
  console.log(useSearch)
  let searchTerm = useSelector((state) => state.content.searchTerm);


  useEffect(() => {
    let input = {page: page, after: after, searchTerm: searchTerm, useSearch: useSearch}
    dispatch(loadContent(input));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, page, useSearch, searchTerm]);

  return (
    <div className="App">
      <Header />
      {(loadingContent === true) ? <h1>LOADING</h1> : (failedToLoadContent === true) ? <h1>Failed To Load</h1> : <ContentContainer />}
      
    </div>
  );

}

export default App;
